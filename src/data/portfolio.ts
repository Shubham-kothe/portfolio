import type { PersonalInfo, Experience, Project, Skill } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Shubham Kothe",
  title: "Frontend Developer",
  bio: "Passionate frontend developer with expertise in React, TypeScript, and modern web technologies. I love creating beautiful, responsive, and user-friendly web applications that provide exceptional user experiences.",
  avatar: "/avatar.jpg", // Add your avatar image to public folder
  contact: {
    email: "shubham@example.com", // Update with your actual email
    phone: "+1 (555) 123-4567", // Update with your actual phone
    linkedin: "https://linkedin.com/in/shubham-kothe", // Update with your LinkedIn
    github: "https://github.com/Shubham-kothe", // Update with your GitHub
    website: "https://shubhamkothe.dev", // Update with your website
    location: "Mumbai, India" // Update with your location
  }
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Innovate Inc.",
    location: "Mumbai, India",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led frontend development team of 5 developers in building scalable React applications",
      "Implemented modern UI/UX designs using React, TypeScript, and Tailwind CSS",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Collaborated with backend teams to integrate RESTful APIs and GraphQL endpoints"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
    logo: "/logos/innovate-inc.png"
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Solutions Ltd.",
    location: "Pune, India",
    startDate: "2020-06",
    endDate: "2021-12",
    description: [
      "Developed responsive web applications using React and modern JavaScript",
      "Implemented component-based architecture following best practices",
      "Worked closely with designers to create pixel-perfect user interfaces",
      "Participated in code reviews and mentored junior developers"
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Redux"],
    logo: "/logos/solutions-ltd.png"
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Bengaluru, India",
    startDate: "2019-01",
    endDate: "2020-05",
    description: [
      "Designed user-centric interfaces for web and mobile applications",
      "Created wireframes, mockups, and prototypes for new features",
      "Conducted user research and usability testing to gather feedback",
      "Collaborated with developers to ensure design consistency"
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "Illustrator", "Photoshop"],
    logo: "/logos/creative-minds.png"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, TypeScript, and modern design patterns.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API", "Firebase"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: "/project1.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.herokuapp.com",
    image: "/project2.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    image: "/project3.jpg",
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "Expert" },
  { name: "TypeScript", category: "Frontend", level: "Advanced" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Expert" },
  { name: "HTML5", category: "Frontend", level: "Expert" },
  { name: "CSS3", category: "Frontend", level: "Expert" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "Vue.js", category: "Frontend", level: "Intermediate" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "Intermediate" },
  { name: "Express.js", category: "Backend", level: "Intermediate" },
  { name: "REST APIs", category: "Backend", level: "Advanced" },
  { name: "GraphQL", category: "Backend", level: "Intermediate" },
  
  // Database
  { name: "MongoDB", category: "Database", level: "Intermediate" },
  { name: "PostgreSQL", category: "Database", level: "Beginner" },
  { name: "Firebase", category: "Database", level: "Intermediate" },
  
  // Tools
  { name: "Git", category: "Tools", level: "Advanced" },
  { name: "VS Code", category: "Tools", level: "Expert" },
  { name: "Figma", category: "Tools", level: "Intermediate" },
  { name: "Webpack", category: "Tools", level: "Intermediate" },
  { name: "Vite", category: "Tools", level: "Advanced" }
];
