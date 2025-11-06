import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react"; 
import { useState, forwardRef } from "react"; 
import useScrollHide from "@/hooks/use-scroll-hide"; 
import { courseList, toSlug } from "@/lib/course-data"; 
// New Imports for Hover Navigation Menu
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


// Helper component for NavigationMenu links (Standard Shadcn pattern)
// Simplified to only show the title (Request 2)
const ListItem = forwardRef(({ className, title, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    to={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    {/* Only showing the title */}
                    <div className="text-sm font-medium leading-none">{title}</div> 
                    {/* Description removed */}
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
// eslint-disable-next-line react/display-name
ListItem.displayName = "ListItem";


const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/contact", label: "Contact Us" },
];


const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const shouldHide = useScrollHide(100); 

  const isActive = (path: string) => location.pathname === path;

  const smartNavbarClass = shouldHide 
    ? "transform -translate-y-full" 
    : "transform translate-y-0";

  const isCoursePathActive = location.pathname.startsWith('/courses');


  return (
    <nav className={`fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${smartNavbarClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png" 
              alt="Nexvyzed Logo"
              className="h-8 w-auto" 
            />
          </Link>

          {/* Desktop Navigation (Now using NavigationMenu for hover) */}
          <NavigationMenu className="hidden md:flex"> 
            <NavigationMenuList>
                {/* 1. Home Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link 
                            to="/" 
                            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                                isActive('/') ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                            Home
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 2. COURSES DROPDOWN MENU (Hover Triggered) */}
                <NavigationMenuItem>
                    {/* NavigationMenuTrigger handles the hover and chevron change */}
                    <NavigationMenuTrigger className={isCoursePathActive ? "text-primary" : "text-muted-foreground"}>
                        Courses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {/* Course list organized in a grid */}
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <ListItem title="View All Courses" href="/courses" className="col-span-2 font-bold text-primary/80" />
                            {courseList.map((course, index) => (
                                <ListItem
                                    key={index}
                                    title={course.title}
                                    href={`/courses/${toSlug(course.title)}`}
                                >
                                    {/* Description removal handled inside ListItem */}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* 3. About us Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link 
                            to="/about" 
                            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                                isActive('/about') ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                            About us
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 4. Contact Us Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link 
                            to="/contact" 
                            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                                isActive('/contact') ? "text-primary" : "text-muted-foreground"
                            }`}
                        >
                            Contact Us
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            {/* CTA Button is outside NavigationMenu for visual separation */}
            <div className="ml-6"> 
                <Button asChild variant="default" size="sm">
                    <Link to="/contact">Get Started</Link>
                </Button>
            </div>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu (Using simple links) */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {/* Home Link */}
              <Link
                key="/"
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/') ? "text-primary" : "text-muted-foreground"
                }`}
              >
                  Home
              </Link>
              
              {/* All Courses link (Bold separator) */}
              <Link
                  to="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-bold border-b border-primary/20 transition-colors ${
                      isCoursePathActive ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                  All Courses
              </Link>
              {/* Individual Course links (Simplified) */}
              {courseList.map((course, index) => ( 
                <Link
                  key={`mobile-course-${index}`}
                  to={`/courses/${toSlug(course.title)}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-1 text-sm transition-colors hover:text-primary text-muted-foreground`}
                >
                  {course.title}
                </Link>
              ))}

              {/* About Us Link */}
              <Link
                key="/about"
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/about') ? "text-primary" : "text-muted-foreground"
                }`}
              >
                  About us
              </Link>

              {/* Contact Us Link */}
              <Link
                key="/contact"
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/contact') ? "text-primary" : "text-muted-foreground"
                }`}
              >
                  Contact Us
              </Link>
              
              <div className="px-4 pt-2">
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;