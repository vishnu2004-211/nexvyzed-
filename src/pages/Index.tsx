import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";
import {
  GraduationCap,
  Target,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShieldCheck, 
  HeartHandshake, 
  BriefcaseBusiness, 
  MessageSquareText,
} from "lucide-react"; 

// --- UPDATED trustElements ARRAY ---
const trustElements = [
  {
    icon: ShieldCheck,
    title: "Proven Success Rate",
    description: "High placement and exam success rates validated by student testimonials.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Aligned Curriculum",
    description: "Training modules constantly updated to meet current industry demands and standards.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Mentorship",
    description: "Personalized guidance from expert faculty available throughout your journey.",
  },
  {
    icon: TrendingUp, // Replaced 4.9/5 Rating with this new feature
    title: "Flexible Learning Options",
    description: "Access content 24/7 with flexible schedules suitable for students and working professionals.",
  },
];
// ------------------------------------


const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Placement Training",
      description: "Comprehensive training programs designed to help you crack campus placements with confidence.",
    },
    {
      icon: BookOpen,
      title: "Competitive Exams",
      description: "Expert coaching for government exams including SSC, Banking, Railways, and more.",
    },
    {
      icon: Users,
      title: "Placement Drives",
      description: "Regular placement drives with leading companies across various industries.",
    },
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Learn from experienced professionals with proven track records in their fields.",
    },
  ];


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Shape Your Future with{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Nexvyzed
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Expert training for placements and competitive exams. Join thousands of successful
                  students who have achieved their career goals with us.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" variant="hero">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Students learning together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 border rounded-lg bg-card/50 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{element.title}</h3>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Nexvyzed?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide comprehensive training programs that prepare you for success in placements and
              competitive examinations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary to-accent py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join Nexvyzed today and take the first step towards a successful career. Our expert trainers
              and proven methodologies will guide you every step of the way.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/courses">View All Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;