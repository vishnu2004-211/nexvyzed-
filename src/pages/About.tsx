import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Trophy, GraduationCap, Users } from "lucide-react"; // Added icons for new elements
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

      {/* NEW: Our Story Section (Narrative Orientation) */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Column: Image/Visual Placeholder */}
            <div className="h-full min-h-[300px] overflow-hidden rounded-xl shadow-xl bg-muted flex items-center justify-center">
                {/* In a real app, you would replace this div with an <img src="..." /> */}
                <span className="text-muted-foreground/70 text-xl font-semibold">
                    
                </span>
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