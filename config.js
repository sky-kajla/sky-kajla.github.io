const CONFIG = {
  githubUsername: "sky-kajla",
  // Repositories to exclude from the showcase
  excludeRepos: ["own-ai-model"],

  // Custom running/demo links for specific GitHub repositories
  repoHomepages: {
    "Portfolio": "https://sky-kajla.github.io",
    "portfolio": "https://sky-kajla.github.io",
    "sky-kajla.github.io": "https://sky-kajla.github.io",
    "educonnect": "https://github.com/sky-kajla/educonnect"
  },

  // Basic Information from new CV
  name: "AKASH KAJLA",
  title: "Computer Science & Engineering Student",
  bio: "Motivated and detail-oriented third-year Computer Science and Engineering student at Brainware University with a strong interest in software development and problem-solving. Skilled in Python, C, HTML, and MySQL, with a passion for learning new technologies and building a successful career in software development. A quick learner and effective team player seeking an internship opportunity to apply technical skills, gain practical experience, and contribute to organizational success.",
  location: "Barasat, North 24 Parganas, West Bengal, 700125",
  avatarUrl: "", // Automatically fetches from GitHub

  // Social and Professional Links
  socials: {
    github: "https://github.com/sky-kajla",
    linkedin: "https://www.linkedin.com/in/akash-kajla-84935b331",
    twitter: "#",
    email: "mailto:kajlaakash3@gmail.com",
    resume: "./Akash_Kajla_Resume.pdf"
  },

  // Technical Skills & Core Strengths categorized exactly from new CV
  skills: [
    { name: "Python", category: "Programming Languages" },
    { name: "C", category: "Programming Languages" },
    { name: "HTML", category: "Web Technologies" },
    { name: "MySQL", category: "Data & Databases" },
    { name: "Object-Oriented Programming (OOP)", category: "Core Concepts" },
    { name: "Operating Systems", category: "Core Concepts" },
    { name: "GitHub", category: "Tools & Professional" },
    { name: "VS Code", category: "Tools & Professional" },
    { name: "Excel", category: "Tools & Professional" },
    { name: "MS Office", category: "Tools & Professional" },
    { name: "Documentation", category: "Tools & Professional" },
    { name: "Presentation", category: "Tools & Professional" },
    { name: "Problem-Solving", category: "Soft Skills" },
    { name: "Full-Stack Development", category: "Soft Skills" },
    { name: "Teamwork", category: "Soft Skills" },
    { name: "Adaptability", category: "Soft Skills" },
    { name: "Quick Learning", category: "Soft Skills" },
    { name: "Communication", category: "Soft Skills" }
  ],

  // Education details from new CV
  education: [
    {
      institution: "Brainware University, Kolkata, West Bengal",
      degree: "B.Tech in Computer Science and Engineering (5th Semester)",
      duration: "2024–2028 (4th Sem SGPA: 8.00)"
    },
    {
      institution: "Tarahat Saradamoni High School",
      degree: "Class XII (Board: WBCHSE)",
      duration: "2022 - 2024"
    },
    {
      institution: "Tarahat Saradamoni High School",
      degree: "Class X (Board: WBBSE)",
      duration: "Passing Year: 2022"
    }
  ],

  // Key Achievements & Certifications from new CV
  achievements: [
    {
      title: "Science Mela 2024 (Group Event)",
      issuer: "Nehru Yuva Kendra & Brainware University NSS",
      description: "Secured 3rd position in the Science Mela event organized by Nehru Yuva Kendra, Barasat, demonstrating teamwork and technical problem-solving skills.",
      year: "2024",
      icon: "trophy",
      link: "https://www.linkedin.com/posts/akash-kajla-84935b331_sciencemela-nehruyuvakendra-brainwareuniversity-share-7323694062346153984-oA_S/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOGF_kBWB46nd0If2SJ-UVv-QkDC9rBwBw"
    },
    {
      title: "Boeing IIT National Aeromodelling Competition 2025",
      issuer: "Boeing & IIT Kharagpur",
      description: "Represented Brainware University and was selected among the Top 30 teams in the East Zone in the national-level aeromodelling competition.",
      year: "2025",
      icon: "award",
      link: "https://www.linkedin.com/posts/akash-kajla-84935b331_aeromodelling-boeingcompetition-iitkharagpur-ugcPost-7324152069416747010-33Y9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOGF_kBWB46nd0If2SJ-UVv-QkDC9rBwBw"
    },
    {
      title: "Diploma in Computer Application (DCA) – Grade A",
      issuer: "National Computer Institute",
      description: "Completed a Diploma in Computer Application covering Computer Fundamentals & Windows, MS Office, Networking Concepts & Internet, and HTML, achieving Grade A.",
      year: "2022",
      icon: "file-badge"
    }
  ],

  languages: [
    "English (Professional Proficiency)",
    "Hindi (Conversational Proficiency)",
    "Bengali (Native Proficiency)"
  ],
  hobbies: ["Read books", "Play outdoor games", "Writing", "Exploring New Technologies"]
};

// Export configuration for browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}
