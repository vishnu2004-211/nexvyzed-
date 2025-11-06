import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Nexvyzed</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with quality training for placements and competitive exams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Placement Training</li>
              <li>Aptitude & Reasoning</li>
              <li>Technical Skills</li>
              <li>Competitive Exams</li>
            </ul>
          </div>

          {/* Contact - UPDATED */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {/* Only Mail remains */}
              <li className="flex items-start space-x-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>careersmasternex@gmail.com</span>
              </li>
              {/* Phone and Address removed */}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexvyzed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;