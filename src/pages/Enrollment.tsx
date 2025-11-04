// src/pages/Enrollment.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
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
    "Campus Placement Training",
    "Aptitude & Reasoning",
    "Technical Skills Development",
    "Competitive Exam Preparation",
    "Communication & Soft Skills",
    "Interview Mastery",
];

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "", // WhatsApp Number
    graduationYear: "", // Graduation Year
    course: "", // Selected course
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.course) {
        toast.error("Please select a course you are interested in.");
        return;
    }

    try {
        // Formspree requires the data to be sent as JSON in the fetch body
        const response = await fetch(FORMSPREE_API_URL, {
            method: 'POST',
            // Set headers for JSON submission
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData), 
        });

        if (response.ok) {
            toast.success("Enrollment submitted successfully! Check your email for confirmation.", {
                icon: <CheckCircle className="text-green-500" />
            });
            // Reset form
            setFormData({ name: "", email: "", phone: "", whatsapp: "", graduationYear: "", course: "" });
        } else {
            // This handles application-level errors (e.g., Formspree setup issue)
            toast.error("Submission failed. Please check your Formspree dashboard.");
        }
    } catch (error) {
        console.error("Network error during submission:", error);
        toast.error("Network error. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Custom handler for the Select component
  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, course: value });
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
                  <Select onValueChange={handleSelectChange} value={formData.course} required>
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

                {/* Grid for Contact Info */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Primary contact number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-medium">
                      WhatsApp Number 
                    </label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="Same as phone or different"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
                      min={new Date().getFullYear() - 10} 
                      max={new Date().getFullYear() + 5} 
                      required
                    />
                  </div>
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