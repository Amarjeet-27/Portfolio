import {
  Database,
  Truck,
  Cpu,
  Code,
  TrendingUp,
  BookOpen,
  Star,
} from "lucide-react";

const config = {
  name: "AMARJEET KUMAR CHAURASIA",
  tagline: "Full-Stack Developer | MERN & Spring Boot",
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
    Java: ["Java", "J2EE", "Spring", "Spring Boot", "JDBC", "Hibernate", "JPA"],
    "Core CS & Low-Level": [
      "C",
      "C++",
      "Python",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Data Structures and Algorithms",
      "TCP/UDP Sockets",
      "RESP Protocol",
      "Embedded Systems",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Cloud & DevOps": [
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, Lambda)",
      "CI/CD",
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
        "Developed scalable, high-performance C/C++ applications using TCP/IP and UDP socket programming, enabling reliable real-time communication in production-grade distributed systems.",
        "Designed and implemented robust multi-threaded client–server architectures using concurrency models, synchronization mechanisms, and IPC, enabling 5× higher connection handling capacity with sub-50ms response latency under load.",
        "Optimized network communication workflows and data handling pipelines, reducing data processing overhead by 40% and significantly improving system stability and end-to-end reliability.",
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
      title: "Redis-Compatible In-Memory Key-Value Store",
      Technologies: ["C++", "Linux", "RESP Protocol", "TCP Sockets", "Epoll"],
      summary:
        "Built a Redis-compatible, epoll-driven in-memory key–value store in C++ on Linux, using non-blocking sockets and a single-threaded event loop to efficiently handle multiple concurrent clients.",
      github: "https://github.com/Amarjeet-27/Redis_Epolled",
      icon: Database,
    },
    {
      title: "FastBite – A Food Delivery Platform",
      Technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Hibernate",
        "Docker",
        "React.js",
        "Tailwind CSS",
      ],
      summary:
        "Built a scalable full-stack food delivery system enabling users to browse menus, place real-time orders, and manage accounts.",
      link: "https://food-frontend-rho-ruby.vercel.app/login",
      github: "https://github.com/Amarjeet-27/food_frontend",
      icon: Truck,
    },
    {
      title: "Prep4Int - Interactive DSA Learning Platform",
      Technologies: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
      summary:
        "Educational website focused on Data Structures and Algorithms (DSA) allowing users to learn topics, get recommendations, and manage personalized DSA notes.",
      link: "https://prep4int-qwqz.onrender.com",
      github: "https://github.com/Amarjeet-27/Prep4Int",
      icon: BookOpen,
    },
    {
      title: "JobHunter - Distributed Job Aggregation Platform",
      Technologies: ["MERN", "Puppeteer", "Node-Cron", "NoSQL"],
      summary:
        "Built a job aggregator to scrape and consolidate listings from sites like Naukri using Puppeteer + Node-Cron.",
      link: "https://job-hunter-rosy.vercel.app/",
      github: "https://github.com/Amarjeet-27/JobHunter",
      icon: TrendingUp,
    },

    {
      title: "MyBookStore - Online Bookstore Platform",
      Technologies: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
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
