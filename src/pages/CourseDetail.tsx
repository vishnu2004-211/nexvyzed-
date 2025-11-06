// src/pages/CourseDetail.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Briefcase,
    Trophy,
    Clock,
    CheckCircle,
    BookOpen,
    ArrowRight,
    Brain,
    Code,
    Users,
    Gift 
} from "lucide-react";

// --- EXPANDED DETAILED COURSE DATA FOR ALL 6 COURSES (Final Version with Takeaways cleaned) ---
const detailedCourseData = {
    // 1. Technical Placement Training (UPDATED IMPORTANCE FIELD)
    'placement-training': { 
        title: "Technical Placement Training (Full Stack Focus)",
        icon: Briefcase,
        duration: "5 Months",
        level: "Intermediate to Advanced",
        price: "₹15,999",
        importance: "The definitive program for final-year students targeting technical roles in product-based companies. Focuses heavily on Data Structures, Algorithms, and a modern Full-Stack project.", // 👈 TEXT MODIFIED HERE
        syllabus: [
            "Month 1: <strong>Aptitude & Core Skills Refinement</strong> (Quantitative Aptitude, Logical Reasoning, Verbal Ability focused on Tech Company screening tests).",
            "Month 2: <strong>Data Structures & Essential Algorithms</strong> (Arrays, Linked Lists, Stacks, Queues, Hashmaps. Introduction to Time & Space Complexity).",
            "Month 3: <strong>Advanced Algorithms & Problem Solving</strong> (Trees, Graphs, Dynamic Programming, Greedy Algorithms. Solving 150+ LeetCode style questions).",
            "Month 4: <strong>System Design Fundamentals</strong> (Object-Oriented Design principles (SOLID), Database Schema design (SQL/NoSQL), basics of Scalability and Load Balancing. Core concepts of Distributed Systems).",
            "Month 5: <strong>Technical Full-Stack Project & Interview Prep</strong> (Building a complete Java/Python/MERN stack application. Mock interviews focused on technical depth, including code debugging and architectural questions).",
            "Ongoing: <strong>Soft Skills & HR Preparation</strong> (Resume structuring, effective communication strategies, and behavioral interview practice).",
        ],
        takeaways: [
            "Guaranteed Full-Stack Project for your portfolio.",
            "Access to Exclusive Regular Interview Drives with partner companies.",
            "Mastery of over 15 essential DSA topics for coding rounds.",
            "Personalized Resume and LinkedIn Profile optimization guidance.",
        ]
    },
    // 2. Aptitude & Reasoning
    'aptitude-reasoning': {
        title: "Aptitude & Reasoning",
        icon: Brain,
        duration: "2 Months",
        level: "All Levels",
        price: "₹4,999",
        importance: "The foundational program to boost numerical, critical thinking, and logical skills, critical for any entrance exam, job screening test, or competitive examination. Focus on speed and accuracy.",
        syllabus: [
            "Week 1-3: <strong>Quantitative Aptitude</strong> (Time & Work, Speed, Distance & Time, Percentages, Profit & Loss. Mastering quick calculation techniques and approximation).",
            "Week 4-5: <strong>Arithmetic & Data Interpretation (DI)</strong> (Ratio & Proportion, Mixtures & Allegations. Comprehensive study of Bar Graphs, Pie Charts, and Tables, focusing on speed reading).",
            "Week 6-8: <strong>Logical Reasoning</strong> (Seating Arrangements, Puzzles, Coding-Decoding, Blood Relations, Syllogisms. Developing logical inference and pattern recognition skills).",
            "Ongoing: <strong>Weekly Timed Mock Tests</strong> and detailed performance analysis for continuous speed improvement.",
        ],
        takeaways: [
            "Significant improvement in speed and accuracy for timed sections.",
            "Certification for Foundation-Level Aptitude Mastery.",
            "Access to a vast library of topic-wise practice questions.",
        ]
    },
    // 3. Technical Skills Development
    'technical-skills-development': {
        title: "Technical Skills Development",
        icon: Code,
        duration: "4 Months",
        level: "Intermediate",
        price: "₹11,499",
        importance: "Gain mastery in essential programming fundamentals, data structures, and system design principles required for top-tier technology roles and competitive coding contests. This is a rigorous coding-focused track.",
        syllabus: [
            "Month 1: <strong>Programming Fundamentals & OOP</strong> (Deep dive into C++ or Java syntax, memory management, and advanced Object-Oriented Programming (OOP) concepts like Polymorphism and Inheritance).",
            "Month 2: <strong>Core Data Structures</strong> (Implementation and complexity analysis of Stacks, Queues, Linked Lists, and specialized Trees (AVL, Red-Black).)",
            "Month 3: <strong>Advanced Data Structures & Graph Algorithms</strong> (Heaps, Tries, Disjoint Set Union (DSU). Extensive coverage of Graph algorithms: BFS, DFS, Dijkstra’s, Kruskal's, and Prim's).",
            "Month 4: <strong>Advanced Algorithms</strong> (Dynamic Programming (DP) techniques, Greedy Algorithms, Backtracking, and Recursion. Focus on competitive coding challenges and medium/hard problems).",
        ],
        takeaways: [
            "Fluency in a core programming language (C++ or Java) for interviews.",
            "Strong foundation in Algorithms and Complexity Analysis.",
            "Ability to solve medium-to-hard coding contest problems.",
            "Certificate of completion in Advanced DSA.",
        ]
    },
    // 4. Competitive Exam Preparation
    'competitive-exam-preparation': {
        title: "Competitive Exam Preparation",
        icon: Trophy,
        duration: "6 Months",
        level: "All Levels",
        price: "₹18,999",
        importance: "This specialized program provides the focus and comprehensive content needed to excel in rigorous government, banking, and civil service examinations like SSC, IBPS, and Railways, covering all non-technical subjects.",
        syllabus: [
            "Month 1-2: <strong>General Awareness (Static GK)</strong> (Detailed coverage of Indian History, Geography, and Polity, focusing on exam-relevant facts and timelines).",
            "Month 3: <strong>English Language & Comprehension</strong> (Advanced vocabulary building, error detection, passage comprehension, and precise sentence correction techniques).",
            "Month 4: <strong>Quantitative & Financial Aptitude</strong> (Advanced topics in time, speed, distance, simple & compound interest, specifically for Banking/SSC math sections).",
            "Month 5: <strong>Current Affairs & Banking Awareness</strong> (In-depth analysis of last 6 months' current events, economic news, and banking terminology required for IBPS/SBI exams).",
            "Month 6: <strong>Simulated Mock Tests & Strategy</strong> (Weekly full-length mock tests under strict time constraints, followed by sectional analysis and strategy adjustment sessions).",
        ],
        takeaways: [
            "Access to 50+ full-length mock tests mimicking real exam conditions.",
            "Deep understanding of the Current Affairs relevant to competitive exams.",
            "Mastery of advanced shortcut techniques for rapid problem solving.",
            "Personalized exam strategy and time management plans.",
        ]
    },
    // 5. Communication & Soft Skills
    'communication-soft-skills': {
        title: "Communication & Soft Skills",
        icon: Users,
        duration: "2 Months",
        level: "All Levels",
        price: "₹4,499",
        importance: "Essential training to enhance verbal and non-verbal communication, critical for successful Group Discussions (GD), professional presentations, and making a powerful first impression in any job environment.",
        syllabus: [
            "Week 1-3: <strong>Verbal Communication Mastery</strong> (Neutral accent development, advanced vocabulary, pronunciation correction, and impromptu speaking practice).",
            "Week 4: <strong>Non-Verbal and Body Language</strong> (Understanding and utilizing professional body language, gestures, and maintaining appropriate eye contact in formal settings).",
            "Week 5-6: <strong>Group Discussion & Negotiation Skills</strong> (Practice real-world GD scenarios, learning how to articulate opinions persuasively, and techniques for negotiation and conflict resolution).",
            "Week 7-8: <strong>Presentation & Email Etiquette</strong> (Designing and delivering high-impact professional presentations, and mastering formal and informal email communication etiquette).",
        ],
        takeaways: [
            "Ability to lead and perform confidently in Group Discussions (GD).",
            "Improved public speaking and presentation skills.",
            "A professional approach to interview and workplace etiquette.",
            "Personalized feedback on communication style.",
        ]
    },
    // 6. Interview Mastery
    'interview-mastery': {
        title: "Interview Mastery",
        icon: BookOpen,
        duration: "1 Month",
        level: "All Levels",
        price: "₹2,999",
        importance: "An intensive boot camp focused purely on cracking the final stages of the hiring process. This is designed to help students confidently answer tough behavioral and technical questions, and negotiate salaries effectively.",
        syllabus: [
            "Week 1: <strong>HR Interview Deconstruction</strong> (Mastering the 'Tell Me About Yourself' pitch, understanding company fit, and using the STAR method for behavioral questions).",
            "Week 2: <strong>Technical Round Simulation</strong> (Practicing coding and concept-based questions specific to the student's domain (CS/IT/ELEC). Focus on problem-solving under pressure).",
            "Week 3: <strong>Aptitude & Puzzle Rounds</strong> (Rapid-fire testing on mental math and lateral thinking puzzles common in preliminary screening interviews).",
            "Week 4: <strong>Salary Negotiation & Feedback</strong> (Role-playing final negotiation scenarios, learning how to ask intelligent questions to the interviewer, and receiving detailed, personalized feedback from industry mentors).",
        ],
        takeaways: [
            "Confidence in handling both HR and technical interviews.",
            "A strong, tailored interview preparation checklist.",
            "Skills in salary negotiation and closing offers.",
            "Minimum of 5 high-fidelity mock interviews.",
        ]
    },
};
// ----------------------------------------------------------------------


// Function to convert title to slug for dynamic routing
const toSlug = (title: string): string => title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');


const CourseDetail = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = detailedCourseData[courseSlug || '']; // Safely handle undefined slug

  if (!course) {
    return (
      <div className="min-h-screen">
          <Navigation />
          <div className="container mx-auto px-4 py-20 text-center">
            <p className="text-xl font-semibold">
                Course details not found. Please check the URL or return to the <Link to="/courses" className="text-primary hover:underline">Courses page</Link>.
            </p>
          </div>
          <Footer />
      </div>
    );
  }
  
  const Icon = course.icon;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{course.title}</h1>
            <p className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
                <Icon className="h-6 w-6 text-primary" />
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.level}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 max-w-6xl mx-auto">
            
            {/* Left Column: Importance, Takeaways, and Syllabus */}
            <div className="lg:col-span-2 space-y-10">
                
                {/* Importance */}
                <div className="p-6 border rounded-lg shadow-sm">
                    <h2 className="mb-4 text-2xl font-bold flex items-center gap-2 text-primary">
                        <Trophy className="h-6 w-6" /> Course Importance
                    </h2>
                    <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: course.importance }}></p>
                </div>
                
                {/* Key Takeaways */}
                <div className="p-6 border rounded-lg shadow-sm">
                    <h2 className="mb-4 text-2xl font-bold flex items-center gap-2 text-accent">
                        <Gift className="h-6 w-6" /> Key Takeaways
                    </h2>
                    <ul className="space-y-3">
                        {course.takeaways.map((takeaway, index) => (
                            <li key={index} className="flex items-start text-muted-foreground">
                                <CheckCircle className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                                <span className="text-lg">{takeaway}</span> 
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Price and Enrollment Details */}
                <div className="p-6 border rounded-lg shadow-sm bg-muted/50">
                    <h2 className="mb-4 text-2xl font-bold flex items-center gap-2 text-accent">
                        <Clock className="h-6 w-6" /> Key Enrollment Details
                    </h2>
                    <div className="space-y-3 text-lg">
                        <p><strong>Duration & Level:</strong> {course.duration} ({course.level})</p>
                        <p><strong>Price:</strong> {course.price}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          * Note: Enrollment provides 24/7 access to recorded lectures, comprehensive study materials, and dedicated mentor support channels.
                        </p>
                    </div>
                </div>

                {/* Enrollment Button for Mobile/Mid-page */}
                <div className="block lg:hidden">
                    <Button asChild size="lg" className="w-full">
                      <Link to="/enroll">
                        Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                </div>

                {/* Syllabus Section (Elaborate) */}
                <div className="p-6 border rounded-lg shadow-sm">
                    <h2 className="mb-4 text-2xl font-bold flex items-center gap-2 text-primary">
                        <BookOpen className="h-6 w-6" /> Detailed Syllabus & Timeline
                    </h2>
                    <ul className="space-y-4">
                        {course.syllabus.map((item, index) => (
                            <li key={index} className="text-muted-foreground border-b pb-2 last:border-b-0">
                                <span className="font-semibold text-foreground block mb-1">{`Phase ${index + 1}:`}</span>
                                <span className="text-sm" dangerouslySetInnerHTML={{ __html: item }}></span> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Column: Sticky Enrollment CTA */}
            <div className="hidden lg:block">
                <div className="sticky top-24 p-6 border rounded-lg shadow-lg bg-card text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
                    <p className="mb-6 text-muted-foreground">Secure your spot in the {course.title} program today!</p>
                    <div className="space-y-4">
                        <Button asChild size="lg" className="w-full">
                            <Link to="/enroll">
                                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link to="/contact">Have Questions? Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;