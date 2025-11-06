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
  CalendarCheck, 
  BadgeCheck, 
  MonitorDot, 
} from "lucide-react"; 
// Assuming the following Carousel components exist in src/components/ui/
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 


// --- FINAL UPDATED DATA: Records/Stats ---
const achievementRecords = [
    { value: "1800+", label: "Students Trained" }, // Updated
    { value: "3+", label: "Years of Operation" },  // Updated
    { value: "60+", label: "Placement Drives Conducted" }, // Updated
    { value: "85%", label: "Placement Success Rate" }, // Updated
];
// ------------------------------


// --- Existing Trust Elements (Non-Sliding) ---
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
    icon: TrendingUp, 
    title: "Flexible Learning Options",
    description: "Access content 24/7 with flexible schedules suitable for students and working professionals.",
  },
];


// --- SLIDING TRUST FACTORS ---
const slidingTrustFactors = [
    {
        icon: CalendarCheck,
        title: "Regular Interview Drives",
        description: "We host exclusive placement drives with leading IT and product-based companies throughout the year.",
        color: "text-primary-foreground bg-primary",
    },
    {
        icon: BadgeCheck,
        title: "Official Course Certificates",
        description: "Receive a professional certificate of completion recognized by our industry partners upon graduation.",
        color: "text-accent-foreground bg-accent", 
    },
    {
        icon: MonitorDot,
        title: "Interactive Live Sessions",
        description: "Learn directly from expert trainers in real-time sessions with dedicated Q&A slots and instant doubt resolution.",
        color: "text-secondary-foreground bg-secondary", 
    },
    {
        icon: BookOpen,
        title: "Comprehensive Study Materials",
        description: "Get access to updated ebooks, practice question banks, and recorded lectures 24/7.",
        color: "text-foreground bg-muted", 
    },
    { 
        icon: MessageSquareText, 
        title: "24/7 Doubt Resolution",
        description: "Dedicated mentor channels and forums ensure all your technical doubts are cleared quickly.",
        color: "text-primary-foreground bg-primary/90", 
    },
    { 
        icon: GraduationCap, 
        title: "Career & Resume Building",
        description: "Personalized assistance with resume optimization and professional profile building.",
        color: "text-accent-foreground bg-accent/90", 
    },
];
// ---------------------------------


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
                  {/* Nexvyzed Headline is solid orange */}
                  <span className="text-primary"> 
                    Nexvyzed
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Expert training for placements and competitive exams. Join thousands of successful
                  students who have achieved their career goals with us.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                {/* Explore Courses Button is blue (bg-accent) */}
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
      
      {/* NEW SECTION: Achievement Records (Stats) - MOVED BACK TO ORIGINAL POSITION */}
      <section className="py-10 bg-primary/5 border-b">
          <div className="container mx-auto px-4">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {achievementRecords.map((record, index) => (
                      <div key={index} className="text-center p-4">
                          <h3 className="text-5xl font-bold text-primary mb-2">{record.value}</h3>
                          <p className="text-lg font-medium text-foreground/80">{record.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      {/* END NEW SECTION */}

      {/* Trust Elements Section (Static Grid) - NOW AFTER RECORDS */}
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

      {/* Sliding Trust Factors (Carousel) */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center">Why Students Choose Nexvyzed</h2>
          
          <Carousel className="mx-auto max-w-4xl">
            <CarouselContent>
              {slidingTrustFactors.map((factor, index) => {
                const Icon = factor.icon;
                const isMuted = factor.color.includes('bg-muted');
                
                // Determine icon color based on background
                const iconColorClass = factor.color.includes('bg-primary-foreground') ? 'text-primary' : (
                                       factor.color.includes('bg-accent') ? 'text-accent-foreground' : (
                                       factor.color.includes('bg-secondary') ? 'text-secondary-foreground' : 'text-primary'));

                // Determine border color for the icon circle
                const borderColorClass = factor.color.includes('bg-primary-foreground') ? 'border-primary' : (
                                       factor.color.includes('bg-accent') || factor.color.includes('bg-secondary') ? 'border-primary-foreground' : 'border-primary');
                
                // Determine text opacity for dark backgrounds
                const textOpacityClass = isMuted ? 'text-muted-foreground' : 'text-primary-foreground/90';

                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className={`flex flex-col items-center rounded-lg border p-6 text-center shadow-md ${factor.color}`}>
                        {/* Icon Circle Logic */}
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 ${borderColorClass} ${isMuted ? 'bg-white' : 'bg-primary-foreground/20'}`}>
                          <Icon className={`h-8 w-8 ${iconColorClass}`} />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{factor.title}</h3>
                          <p className={`text-sm ${textOpacityClass}`}>{factor.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>


      {/* Features Section (Previous Content) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Offer</h2>
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
      {/* Background changed to bg-background (off-white) and text updated */}
      <section className="border-t bg-background py-16 text-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join Nexvyzed today and take the first step towards a successful career. Our expert trainers
              and proven methodologies will guide you every step of the way.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {/* CHANGE APPLIED HERE: Button changed to Orange Primary */}
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/courses">View All Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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