// src/pages/Contact.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; 

// --- FORMSPREE CONTACT ENDPOINT ---
const FORMSPREE_CONTACT_URL = "https://formspree.io/f/mzzknver"; 
// ---------------------------------


// --- FAQ DATA FOR CONTACT PAGE (Remains unchanged) ---
const contactFAQs = [
    {
        question: "What are your operating hours?",
        answer: "Our support staff is available from 9:00 AM to 6:00 PM IST, Monday through Saturday. You can reach us by phone or email during these hours."
    },
    {
        question: "Where is your main office located?",
        answer: "While our primary operations are managed online, our administrative office is located in Vijayawada, India. All courses are currently delivered digitally."
    },
    {
        question: "How long does it take to get a response to an email inquiry?",
        answer: "We strive to respond to all email inquiries within 24 business hours. For urgent matters, please call us directly during operating hours."
    },
    {
        question: "Do you offer demo classes before enrollment?",
        answer: "Yes, we frequently offer short demo sessions or introductory webinars for our main programs. Please contact us or check the Courses page for upcoming dates."
    },
];
// ---------------------------------


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Data matches the form fields exactly
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
        const response = await fetch(FORMSPREE_CONTACT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSubmit), 
        });

        if (response.ok) {
            toast.success("Thank you! Your message has been sent successfully via Formspree.");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } else {
            const errorData = await response.json();
            console.error("Formspree error:", errorData);
            const errorMessage = errorData.error || "Submission failed. Please try again.";
            toast.error(errorMessage);
        }
    } catch (error) {
        console.error("Submission network error:", error);
        toast.error("Network error. Could not submit the form.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "careersmasternex@gmail.com",
      link: "mailto:careersmasternex@gmail.com",
    },
    // Only Email remains
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl"> 
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="group flex flex-row items-center rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md space-x-4" 
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">{info.title}:</h3>
                    <p className="text-lg font-medium text-foreground">{info.detail}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone" 
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject" 
                      placeholder="Course Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-3xl font-bold text-center">Common Contact Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {contactFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;