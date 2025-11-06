// src/lib/course-data.ts

export const courseList = [
    { title: "Placement Training", description: "The definitive program for final-year students targeting technical roles." },
    { title: "Aptitude & Reasoning", description: "Master quantitative aptitude, logical reasoning, and analytical skills." },
    { title: "Technical Skills Development", description: "Build strong technical foundations in programming, data structures, and algorithms." },
    { title: "Competitive Exam Preparation", description: "Focused preparation for government exams including SSC, Banking, Railways." },
    { title: "Communication & Soft Skills", description: "Enhance your communication skills and professional etiquette for successful career growth." },
    { title: "Interview Mastery", description: "Intensive training focused on cracking interviews with confidence." },
];

// Utility function to convert Course Title to URL-friendly Slug
export const toSlug = (title: string): string => 
  title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');