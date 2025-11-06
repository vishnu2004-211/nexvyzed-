// src/pages/Enrollment.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState, useEffect } from "react"; // 👈 useEffect is needed
import { useLocation } from "react-router-dom"; // 👈 useLocation is needed
import { CheckCircle } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"; 

// --- CRITICAL: FORMSPREE URL ---
const FORMSPREE_API_URL = "https://formspree.io/f/xblpvwae"; 
// ------------------------------------------

const courseOptions = [
    "Technical Placement Training (Full Stack Focus)",
    "Aptitude & Reasoning",
    "Technical Skills Development",
    "Competitive Exam Preparation",
    "Communication & Soft Skills",
    "Interview Mastery",
];

// Removed streamOptions array

const referralOptions = [
    "Google Search/Ads",
    "Social Media (Instagram/LinkedIn)",
    "Friend/Word-of-mouth",
    "College Placement Cell",
    "Other",
];

// List of country codes for the dropdown
const countryCodes = [
    { code: "+91", label: "India (+91)" },
    { code: "+1", label: "USA / Canada (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+971", label: "UAE (+971)" },
    { code: "+49", label: "Germany (+49)" },
    // Add more countries as needed
];

const Enrollment = () => {
  const location = useLocation(); // 👈 Hook to access state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    whatsapp: "", 
    graduationYear: "", 
    course: "", 
    stream: "", 
    city: "", 
    referral: "", 
  });
  
  const [phoneCode, setPhoneCode] = useState("+91"); 
  const [whatsappCode, setWhatsappCode] = useState("+91");

  // CRITICAL CHANGE: Use effect to check for preselected course and set state
  useEffect(() => {
    // Check if state exists and contains the preselectedCourse key
    const state = location.state as { preselectedCourse?: string } | undefined;
    if (state?.preselectedCourse) {
        setFormData(prev => ({
            ...prev,
            course: state.preselectedCourse // Set the course state
        }));
        // Remove the state so it doesn't persist on back/forward navigation
        window.history.replaceState({}, document.title, location.pathname); 
    }
  }, [location.state, location.pathname]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validation checks
    if (!formData.course) {
        toast.error("Please select a course you are interested in.");
        return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
        toast.error("Please enter a valid 10-digit Phone Number.");
        return;
    }

    const whatsappDigits = formData.whatsapp.replace(/\D/g, '');
    if (formData.whatsapp && whatsappDigits.length !== 10) {
        toast.error("Please enter a valid 10-digit WhatsApp Number.");
        return;
    }

    // 2. Prepare data for submission
    const dataToSubmit = {
      ...formData,
      fullPhoneNumber: phoneCode + formData.phone,
      fullWhatsappNumber: formData.whatsapp ? whatsappCode + formData.whatsapp : 'N/A',
    };
    
    // Remove the partial number fields before submission
    delete dataToSubmit.phone;
    delete dataToSubmit.whatsapp;


    try {
        const response = await fetch(FORMSPREE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSubmit), 
        });

        if (response.ok) {
            toast.success("Enrollment submitted successfully! We will contact you soon.", {
                icon: <CheckCircle className="text-green-500" />
            });
            // Reset form and codes
            setFormData({ name: "", email: "", phone: "", whatsapp: "", graduationYear: "", course: "", stream: "", city: "", referral: "" });
            setPhoneCode("+91");
            setWhatsappCode("+91");
        } else {
            toast.error("Submission failed. Please try again.");
        }
    } catch (error) {
        console.error("Network error during submission:", error);
        toast.error("Network error. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone' || name === 'whatsapp') {
        const cleanValue = value.replace(/\D/g, '');
        setFormData({ ...formData, [name]: cleanValue.substring(0, 10) });
        return;
    }
    
    if (name === 'graduationYear') {
        const cleanValue = value.replace(/\D/g, '');
        setFormData({ ...formData, [name]: cleanValue.substring(0, 4) });
        return;
    }

    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Course Enrollment</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to secure your spot in your chosen course.
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Student Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Course Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="course" className="text-sm font-medium">
                    Course Interested In *
                  </label>
                  <Select 
                    onValueChange={(v) => handleSelectChange('course', v)} 
                    value={formData.course} // Uses state value (pre-filled if available)
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {/* GRID 1: Phone Numbers */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <div className="flex space-x-2">
                      {/* Country Code Select (Phone) */}
                      <Select onValueChange={setPhoneCode} value={phoneCode}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {/* Phone Number Input */}
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g., 9876543210 (10 digits)"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-medium">
                      WhatsApp Number
                    </label>
                    <div className="flex space-x-2">
                      {/* WhatsApp Code Select */}
                      <Select onValueChange={setWhatsappCode} value={whatsappCode}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {/* WhatsApp Number Input */}
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="Optional (10 digits)"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        maxLength={10}
                      />
                    </div>
                  </div>
                </div>

                {/* GRID 2: Email and Graduation Year */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Graduation Year */}
                  <div className="space-y-2">
                    <label htmlFor="graduationYear" className="text-sm font-medium">
                      Graduation Year *
                    </label>
                    <Input
                      id="graduationYear"
                      name="graduationYear"
                      type="number"
                      placeholder="E.g., 2024"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                {/* GRID 3: Stream and City */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Educational Stream (TEXT INPUT) */}
                    <div className="space-y-2">
                      <label htmlFor="stream" className="text-sm font-medium">
                        Educational Stream *
                      </label>
                      <Input
                        id="stream"
                        name="stream"
                        placeholder="E.g., CSE, ECE, Mechanical"
                        value={formData.stream}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium">
                        Current City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="E.g., Vijayawada"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                </div>

                {/* Referral Source */}
                <div className="space-y-2">
                  <label htmlFor="referral" className="text-sm font-medium">
                    How Did You Hear About Us? *
                  </label>
                  <Select onValueChange={(v) => handleSelectChange('referral', v)} value={formData.referral} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one option" />
                    </SelectTrigger>
                    <SelectContent>
                      {referralOptions.map((source) => (
                        <SelectItem key={source} value={source}>
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>


                <Button type="submit" size="lg" className="w-full">
                  Submit Enrollment Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;