// src/pages/Courses.tsx (Changes to the Link component)

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Link is needed
// ... (other imports)
import {
  Briefcase,
  Brain,
  Code,
  BookOpen,
  Users,
  Trophy,
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

// --- UTILITY FUNCTION: Converts Course Title to URL-friendly Slug ---
const toSlug = (title: string): string => 
  title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
// --------------------------------------------------------------------


// --- FAQ DATA FOR COURSES PAGE ---
const courseFAQs = [
    {
        question: "What is the mode of delivery for the courses?",
        answer: "Our courses are primarily delivered through a blend of live online classes and recorded video modules. We also offer select in-person workshops depending on location and demand."
    },
    {
        question: "Are there any prerequisites for the Technical Skills Development course?",
        answer: "Yes, basic knowledge of at least one programming language (like C++ or Python) is recommended, as the course dives into Data Structures and Algorithms quickly."
    },
    {
        question: "Do you offer job placement assistance after course completion?",
        answer: "Yes, our Technical Placement Training and Interview Mastery programs include dedicated job assistance, resume building, mock interviews, and access to exclusive placement drives."
    },
    {
        question: "What happens if I miss a live class?",
        answer: "All live sessions are recorded and made available in your student portal within 24 hours, so you can catch up on any missed material at your convenience."
    },
];
// ---------------------------------


const Courses = () => {
  const courses = [
    {
      title: "Placement Training", // Ensure this title matches the key's source
      icon: Briefcase,
      duration: "5 Months",
      level: "Intermediate to Advanced",
      price: "₹15,999", 
      description:
        "The definitive program for final-year students targeting technical roles in product-based companies. Focuses heavily on Data Structures, Algorithms, and a modern Full-Stack development project.",
      features: [
        "Aptitude & Logical Reasoning",
        "Full Stack Development Project",
        "Technical Interview Prep",
        "Mock Interviews",
        "Resume Building",
      ],
    },
    {
      title: "Aptitude & Reasoning",
      icon: Brain,
      duration: "2 Months",
      level: "All Levels",
      price: "₹4,999", 
      description:
        "Master quantitative aptitude, logical reasoning, and analytical skills essential for competitive exams and placement tests.",
      features: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Data Interpretation",
        "Practice Tests",
        "Time Management",
      ],
    },
    {
      title: "Technical Skills Development",
      icon: Code,
      duration: "4 Months",
      level: "Intermediate",
      price: "₹11,499", 
      description:
        "Build strong technical foundations in programming, data structures, algorithms, and system design for technical interviews.",
      features: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "System Design",
        "Coding Practice",
        "Project Development",
      ],
    },
    {
      title: "Competitive Exam Preparation",
      icon: Trophy,
      duration: "6 Months",
      level: "All Levels",
      price: "₹18,999", 
      description:
        "Focused preparation for government exams including SSC, Banking, Railways, and other competitive examinations.",
      features: [
        "Exam Pattern Analysis",
        "Subject-wise Coaching",
        "Current Affairs",
        "Mock Tests",
        "Previous Year Papers",
      ],
    },
    {
      title: "Communication & Soft Skills",
      icon: Users,
      duration: "2 Months",
      level: "All Levels",
      price: "₹4,499", 
      description:
        "Enhance your communication skills, personality development, and professional etiquette for successful career growth.",
      features: [
        "English Communication",
        "Public Speaking",
        "Group Discussions",
        "Presentation Skills",
        "Professional Etiquette",
      ],
    },
    {
      title: "Interview Mastery",
      icon: BookOpen,
      duration: "1 Month",
      level: "All Levels",
      price: "₹2,999", 
      description:
        "Intensive training focused on cracking interviews with confidence through mock interviews and expert guidance.",
      features: [
        "HR Interview Techniques",
        "Technical Interviews",
        "Behavioral Questions",
        "Mock Interview Sessions",
        "Feedback & Improvement",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Courses</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive training programs designed to help you succeed in placements and competitive
              exams. Choose the course that fits your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const slug = toSlug(course.title); // Generate slug for the detail link

              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="border-b bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                    
                    {/* Price Display */}
                    <div className="mb-3 flex items-center gap-2 text-2xl font-bold text-primary">
                        <IndianRupee className="h-5 w-5" />
                        <span>{course.price}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>

                    <div className="mb-6 flex-1">
                      <h4 className="mb-3 text-sm font-semibold">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* NEW BUTTONS: Detail View & Enrollment */}
                    <div className="space-y-3">
                        <Button asChild variant="outline" className="w-full">
                            <Link to={`/courses/${slug}`}>
                                View Course Details
                            </Link>
                        </Button>
                        <Button asChild className="w-full">
                            {/* CRITICAL CHANGE: Passing the course title in the link state */}
                            <Link to="/enroll" state={{ preselectedCourse: course.title }}>
                                Enroll Now
                            </Link>
                        </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {courseFAQs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of successful students who have achieved their career goals with Nexvyzed.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;