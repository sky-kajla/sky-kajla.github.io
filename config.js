const CONFIG = {
  githubUsername: "sky-kajla",
  // Repositories to exclude from the showcase
  excludeRepos: ["own-ai-model"],

  // Custom running/demo links for specific GitHub repositories
  repoHomepages: {
    "Portfolio": "https://sky-kajla.github.io",
    "portfolio": "https://sky-kajla.github.io",
    "sky-kajla.github.io": "https://sky-kajla.github.io"
  },

  // Basic Information
  name: "AKASH KAJLA",
  title: "Computer Science & Engineering Student",
  bio: "I am a motivated and detail-oriented third-year Computer Science & Engineering student at Brainware University with a strong interest in software development and problem-solving. Skilled in Java, Python, C, HTML, and MySQL, with a passion for learning new technologies and building a successful career in software development.",
  location: "Barasat, West Bengal, India",
  avatarUrl: "", // Automatically fetches from GitHub

  // Social and Professional Links
  socials: {
    github: "https://github.com/sky-kajla",
    linkedin: "https://www.linkedin.com/in/akash-kajla-84935b331",
    twitter: "#",
    email: "mailto:kajlaakash3@gmail.com",
    resume: "#"
  },

  // Technical Skills categorized exactly from CV
  skills: [
    { name: "Java", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "MySQL", category: "Database" },
    { name: "Object-Oriented Programming", category: "Concepts" },
    { name: "Operating Systems", category: "Concepts" },
    { name: "VS Code", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Communication", category: "Soft Skills" },
    { name: "Problem-solving", category: "Soft Skills" },
    { name: "Teamwork", category: "Soft Skills" },
    { name: "Time management", category: "Soft Skills" },
    { name: "Adaptability", category: "Soft Skills" },
    { name: "Quick learner", category: "Soft Skills" }
  ],



  // Extra details from CV (Education, Hobbies, Languages) to enrich the portfolio
  education: [
    {
      institution: "Brainware University",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2022 - 2026 (4th Sem SGPA: 8.00)"
    },
    {
      institution: "Tarahat Saradamoni High School",
      degree: "Class XII (Board: WBCHSE)",
      duration: "Passing Year: 2022"
    },
    {
      institution: "Tarahat Saradamoni High School",
      degree: "Class X (Board: WBBSE)",
      duration: "Passing Year: 2020"
    }
  ],
  languages: ["English", "Bengali", "Hindi"],
  hobbies: ["Read books", "Play outdoor games", "Writing", "Exploring New Technologies"]
};

// Export configuration for browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}
