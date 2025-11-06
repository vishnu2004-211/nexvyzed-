// src/pages/About.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Trophy, GraduationCap, Users } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg"; 
import {
  Briefcase,
  Brain,
  Code,
  BookOpen,
  Clock,
  CheckCircle,
  IndianRupee, 
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; 

// --- FOUNDER MESSAGES FOR SCROLLING CARDS (Restored Data) ---
const founderMessages = [
    {
        title: "Mission-Driven Training",
        message: "We built Nexvyzed on the conviction that practical skills trump theory every time. Your success is our singular mission."
    },
    {
        title: "Industry Relevance",
        message: "The competitive world demands more than just a degree; it requires industry-aligned expertise. We ensure our curriculum stays ahead of the curve, always focusing on what recruiters actually look for."
    },
    {
        title: "Investment in Futures",
        message: "We believe education should be an investment with a guaranteed return. Our programs are designed to launch, not just land, successful careers."
    },
    {
        title: "Dedicated Support",
        message: "We promise dedicated mentorship and 24/7 support because learning shouldn't stop when the live class ends. Instant doubt resolution is key to mastering complex technical topics."
    },
    {
        title: "Building Community",
        message: "Join a community of focused, ambitious learners. Our collaborative environment fosters problem-solving and networking, giving you a crucial edge in the job market."
    }
];
// ----------------------------------------------


// --- FounderMessageMarquee Component (Restored Logic) ---
const FounderMessageMarquee = ({ messages }) => {
    // Duplicating the content twice for a seamless looping marquee effect
    const duplicatedMessages = [...messages, ...messages];

    return (
        // The container sets the viewport and hides overflow
        <div 
            className="overflow-hidden relative py-4" 
        >
            {/* The inner element scrolls horizontally */}
            <div className="flex"
                 // NOTE: The 'marquee' animation keyframes must exist in your index.css
                 style={{ 
                     animation: 'marquee 45s linear infinite', 
                     minWidth: '200%' 
                 }}
            >
                {duplicatedMessages.map((item, index) => (
                    // Each message is rendered as a card element
                    <div 
                        key={index} 
                        className="flex-shrink-0 w-80 mr-8" 
                    >
                        <div className="h-full rounded-lg border-2 border-accent/20 bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                            <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-sm italic text-muted-foreground">{`"${item.message}"`}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Fades to make the loop seamless */}
            <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-card to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-card to-transparent"></div>
        </div>
    );
};
// ------------------------------------------


const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Nexvyzed</h1>
            <p className="text-lg text-muted-foreground">
              We are dedicated to bridging the gap between academic knowledge and industry requirements,
              preparing students for successful careers through comprehensive training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section (Narrative Orientation) */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Column: Image */}
            <div className="h-full min-h-[300px] overflow-hidden rounded-xl shadow-xl bg-muted">
                <img
                    src={heroImage} 
                    alt="Students collaborating or professional team setting"
                    className="h-full w-full object-cover" 
                />
            </div>
            
            {/* Right Column: Story Content */}
            <div>
              <h2 className="mb-4 text-3xl font-bold">Our Story & Vision</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Nexvyzed was founded by a team of industry veterans and academic experts who recognized
                the critical need for practical, job-ready skills among university graduates. Our journey
                began with the simple goal of providing focused, high-quality training that directly leads
                to career success.
              </p>
              <p className="mb-6 text-muted-foreground">
                We believe that education should be an investment with a guaranteed return. Our programs
                are constantly refined based on recruiter feedback and evolving technologies, ensuring our
                students are always one step ahead in the competitive job market. We aren't just teaching
                — we're building careers.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED SECTION: Hear From Founders (Now functional) */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <div className="container mx-auto px-0"> 
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-accent">
                    Hear From Our Founders
                </h2>
                
                {/* 👈 COMPONENT IS NOW CALLED HERE */}
                <FounderMessageMarquee messages={founderMessages} />
                
                <p className="mt-8 text-center text-sm font-semibold text-primary">
                    — The Nexvyzed Founding Team
                </p>
            </div>
        </div>
      </section>
      {/* END UPDATED SECTION */}


      {/* Mission & Key Pillars Section (Restructured) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Core Principles</h2>
              <p className="text-lg text-muted-foreground">
                Our operations are guided by a commitment to excellence, real-world relevance, and student empowerment.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Pillar 1: Mission/What We Do */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Our Mission</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    Conduct comprehensive placement training programs
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    Organize placement drives with leading companies
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    Provide coaching for competitive examinations
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Why Choose Us */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Trophy className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Why We Excel</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    Experienced faculty with industry expertise
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    Proven track record of successful placements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    Regular mock tests and assessments
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Student Focus (New Element) */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Student Focus</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                    Personalized mentoring and guidance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                    Comprehensive study materials and resources
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                    24/7 access to recorded lectures and support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;