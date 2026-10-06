import photo from "@/assets/profilephoto.jpeg";
import resume from "@/assets/Ravada-Sanyasi-Naidu-Resume.pdf";

export const profile = {
  name: "Ravada Sanyasi Naidu",
  roles: ["Java Backend Developer", "Spring Boot Developer", "AI/ML & Generative AI Enthusiast"],
  location: "Tirupati, Andhra Pradesh",
  email: "rsanyasinaidu07@gmail.com",
  phone: "+91 9392428385",
  photo,
  resume,
  summary:
    "Highly motivated Artificial Intelligence & Machine Learning student with strong programming and problem-solving skills in Java, Data Structures & Algorithms, SQL, DBMS, and Object-Oriented Programming. Hands-on experience developing backend and full-stack applications using Spring Boot, REST APIs, MySQL, and Spring Data JPA. Solved 350+ DSA problems and seeking software development opportunities to apply technical skills and contribute to real-world projects.",
};

export const socials = {
  github: "https://github.com/NaiduRavada07676",
  linkedin: "https://linkedin.com/in/ravada-sanyasi-naidu",
  leetcode: "https://leetcode.com/u/Naidu2972/",
  gfg: "https://www.geeksforgeeks.org/profile/rsanyasisum9",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Java", "Python", "C"] },
  { group: "Frontend", items: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js (Basic)"] },
  { group: "Backend", items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "JWT", "Apache Kafka"] },
  { group: "Database", items: ["MySQL", "SQL", "MongoDB", "Redis"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "JUnit", "Mockito"] },
  { group: "AI/ML", items: ["B.Tech in AI & ML", "Generative AI (Certified)"] },
  { group: "DSA & Core", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving", "Computer Networks", "Operating Systems"] },
];

export const services = [
  {
    title: "Backend Development",
    description: "Designing and building secure, scalable server-side applications with Java, Spring Boot, Spring Data JPA, and MySQL.",
  },
  {
    title: "REST API Development",
    description: "Creating well-structured RESTful APIs with Spring Security, JWT authentication, and clean, modular service-layer design.",
  },
  {
    title: "AI Applications",
    description: "Exploring AI/ML and Generative AI — integrating LLM APIs and prompt engineering to automate real-world workflows.",
  },
  {
    title: "DSA & Problem Solving",
    description: "350+ problems solved across LeetCode and GeeksforGeeks, with strong fundamentals in OOP, DBMS, and computer science core.",
  },
];

export const experience = [
  {
    company: "EduSkills",
    role: "Java Full Stack Development Intern",
    duration: "Aug 2026 – Oct 2026",
    points: [
      "Participating in an AICTE–EduSkills Virtual Internship focused on Java Full Stack Development using Java, Spring Boot, Hibernate, MySQL, HTML, CSS, JavaScript, Git, and GitHub.",
      "Developing practical applications involving REST APIs, CRUD operations, database integration, and full-stack development.",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    company: "Pantech Solutions",
    role: "Generative AI Intern",
    duration: "Oct 2025 – Dec 2025",
    points: [
      "Built 5+ AI-powered applications using Generative AI APIs and prompt engineering.",
      "Integrated 3+ LLM APIs to automate content generation and user workflows.",
    ],
    tech: ["Generative AI", "LLM APIs", "Prompt Engineering", "Python"],
  },
  {
    company: "GeeksforGeeks",
    role: "Backend Development Intern",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Engineered 8+ RESTful APIs using Java, Spring Boot, Spring Data JPA, and MySQL.",
      "Validated 40+ API endpoints using Postman and improved backend reliability through modular service-layer design.",
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Postman"],
  },
];

export type Project = {
  name: string;
  short: string;
  description: string[];
  features: string[];
  tech: string[];
  categories: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Banking & Transaction Management System",
    short: "Microservices-based banking backend with secure, event-driven transactions.",
    description: [
      "Developed a microservices-based banking backend for authentication, account management, transactions, fraud detection, notifications, and auditing.",
      "Implemented secure REST APIs using Spring Security and JWT with MySQL, Redis caching, Apache Kafka for event-driven communication, and transaction idempotency.",
    ],
    features: ["Authentication", "Account management", "Fraud detection", "Notifications & auditing", "Redis caching", "Kafka events", "Transaction idempotency"],
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "Redis", "Kafka", "Docker", "Microservices"],
    categories: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/NaiduRavada07676/Banking-Transaction-System/tree/main",
  },
  {
    name: "Hotel Booking & Management Platform",
    short: "Full-stack hotel booking platform with role-based access and booking workflows.",
    description: [
      "Developed a full-stack hotel booking platform for hotel, room, customer, and reservation management using Spring Boot REST APIs and React.js.",
      "Implemented JWT authentication, role-based access control, room availability validation, booking and cancellation workflows, and MySQL persistence using Spring Data JPA.",
    ],
    features: ["JWT authentication", "Role-based access control", "Room availability validation", "Booking & cancellation", "Spring Data JPA persistence"],
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Data JPA", "JWT", "Docker", "JUnit", "Mockito", "REST APIs"],
    categories: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/NaiduRavada07676/Hotel-Booking",
  },
];

export const education = [
  { school: "Mohan Babu University, Tirupati, Andhra Pradesh", degree: "B.Tech in Artificial Intelligence & Machine Learning", years: "2023 – 2027", score: "CGPA: 8.6/10.0" },
  { school: "Board of Intermediate Education, Andhra Pradesh", degree: "Intermediate (MPC) / 12th (HSC)", years: "2021 – 2023", score: "94.2%" },
  { school: "Board of Secondary Education, Andhra Pradesh", degree: "Secondary School Certificate (SSC) / 10th", years: "2021", score: "97.83%" },
];

export const certifications: { name: string; issuer: string; url?: string }[] = [
  { name: "Java Backend Development Certification", issuer: "GeeksforGeeks", url: "https://media.geeksforgeeks.org/courses/certificates/9caff92e467ce6a6160cab953d64e6d0.pdf" },
  { name: "Generative AI Certification", issuer: "Pantech Solutions", url: "https://storage.googleapis.com/revex-certificates-production/credentials//iOSY5VdDbV0tRNYAlUEn/691ab76b0452bb99bf2613f8" },
  { name: "Java Programmer Certification", issuer: "Cynohub" },
];

export const achievements = [
  "Participated in AWS Student Community Day 2025 organized by AWS Cloud Club at Mohan Babu University.",
  "Solved 350+ DSA problems across coding platforms.",
];
