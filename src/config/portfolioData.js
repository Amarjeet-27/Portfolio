import {
  Cpu,
  Code,
  Layers,
  TrendingUp,
  BookOpen,
  Star,
  Award,
} from "lucide-react";

const config = {
  name: "AMARJEET KUMAR CHAURASIA",
  tagline: "Full-Stack Developer | MERN & Java Backend",
  contact: {
    phone: "+91-6204893422",
    email: "ajchaurasia1214@gmail.com",
    linkedin: "https://www.linkedin.com/in/amarjeet-kumar-chaurasia-72a6b9185/",
    github: "https://github.com/Amarjeet-27",
  },
  skills: {
    MERN: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    "Java Backend": [
      "Java",
      "J2EE",
      "Spring",
      "Spring Boot",
      "JDBC",
      "Hibernate",
      "JPA",
      "MySQL",
    ],
    "Core CS & Low-Level": [
      "C",
      "C++",
      "Python",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Data Structures and Algorithms",
      "TCP/UDP Sockets",
      "AES-256",
      "Embedded Systems",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Web",
      "Windows",
      "Linux",
    ],
  },
  softSkills: [
    "Leadership",
    "Problem-Solving",
    "Communication",
    "Time Management",
    "Decision-Making",
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Unistring Tech Solutions",
      location: "Hyderabad",
      date: "March 2025 - Present",
      description: [
        "Collaborated to develop secure drone-to-drone communication using multi-threaded C-based TCP/UDP sockets for real-time data exchange in electronics warfare.",
        "Implemented AES-256 encryption and security protocols, ensuring 100% secure data transmission in distributed systems.",
        "Optimized embedded systems on ZYBO Z7 ARM using memory-mapped I/O and GPIO, reducing processing time by 50% and achieving microsecond response times.",
      ],
      icon: Cpu,
    },
    {
      title: "Software Developer Intern",
      company: "SN Bose Summer Internship Program",
      location: "Silchar",
      date: "June 2024 - July 2024",
      description: [
        "Developed a MERN-based online voting platform with blockchain integration to ensure secure and tamper-proof elections.",
        "Implemented admin-based access control for election creation, voter management, and result authorization.",
        "Enabled real-time vote counting, updates, and result announcement through optimized APIs and responsive UI.",
      ],
      icon: Code,
    },
  ],
  projects: [
    {
      title: "Blood Donation Portal - Real-Time Role-Based Platform",
      stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      summary:
        "MERN-based platform with portals for donors, hospitals, and NGOs, enabling real-time blood data coordination and direct donor-to-organization interaction.",
      link: "https://rakta-devta.vercel.app/login",
      github: "https://github.com/Amarjeet-27/RaktaDevta",
      icon: Layers,
    },
    {
      title: "Prep4Int - Interactive DSA Learning Platform",
      stack: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
      summary:
        "Educational website focused on Data Structures and Algorithms (DSA) allowing users to learn topics, get recommendations, and manage personalized DSA notes.",
      link: "https://prep4int-qwqz.onrender.com",
      github: "https://github.com/Amarjeet-27/Prep4Int",
      icon: BookOpen,
    },
    {
      title: "JobHunter - Distributed Job Aggregation Platform",
      stack: ["MERN", "Puppeteer", "Node-Cron", "NoSQL"],
      summary:
        "Built a job aggregator to scrape and consolidate listings from sites like Naukri using Puppeteer + Node-Cron.",
      link: "https://job-hunter-rosy.vercel.app/",
      github: "https://github.com/Amarjeet-27/JobHunter",
      icon: TrendingUp,
    },

    {
      title: "MyBookStore - Online Bookstore Platform",
      stack: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
      summary:
        "E-commerce platform for buying and selling books, featuring user authentication, book reviews, and a shopping cart.",
      link: "https://book-store-rho-five.vercel.app/",
      github: "https://github.com/Amarjeet-27/Book-Store",
      icon: BookOpen,
    },
  ],
  achievements: [
    {
      title: "LeetCode",
      description: "Knight title with a contest rating of 2043 (Top 2%).",
      icon: Star,
      link: "https://leetcode.com/u/hlrssg/",
    },
    {
      title: "CodeChef",
      description: "3-Star coder with a highest rating of 1845.",
      icon: Star,
      link: "https://codeforces.com/profile/HLRSSG",
    },
    {
      title: "Codeforces",
      description: "Pupil with a max rating of 1329.",
      icon: Star,
      link: "https://www.codechef.com/users/hlrssg",
    },
  ],
  certifications: [
    {
      title: "Java Training Complete Course for Java Beginners All in One",
      issuer: "Udemy",
      date: "Sept 2025",
      link: "#",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford University (Coursera)",
      date: "April 2025",
      link: "#",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University (Coursera)",
      date: "Feb 2025",
      link: "#",
    },
  ],
  education: [
    {
      school: "National Institute of Technology (NIT) Silchar",
      degree:
        "Bachelor of Technology - Electronics And Communication Engineering",
      cgpa: "CGPA: 8.70",
      date: "July 2021 - May 2025",
      location: "Silchar, India",
    },
    {
      school: "Bright Career School",
      degree: "HSC",
      cgpa: "Percentage: 93%",
      date: "April 2018 - March 2020",
      location: "Purnea, India",
    },
  ],
};

export default config;
