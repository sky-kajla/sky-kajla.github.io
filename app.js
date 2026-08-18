document.addEventListener("DOMContentLoaded", () => {
  // Initialize Page Elements
  initBasicInfo();
  initSkills();
  initEducation();
  initAchievements();
  initLanguages();
  initHobbies();
  initMobileMenu();
  initScrollEffects();
  initTypingEffect();
  initContactForm();

  // Load the initial GitHub profile
  const defaultUser = CONFIG.githubUsername || "octocat";
  loadGitHubProfile(defaultUser);

  // Setup GitHub search handler
  const searchBtn = document.getElementById("github-search-btn");
  const usernameInput = document.getElementById("github-username-input");
  
  if (searchBtn && usernameInput) {
    searchBtn.addEventListener("click", () => {
      const username = usernameInput.value.trim();
      if (username) {
        loadGitHubProfile(username);
      }
    });

    usernameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const username = usernameInput.value.trim();
        if (username) {
          loadGitHubProfile(username);
        }
      }
    });
  }

  // Update Footer Year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/* ==========================================================================
   Basic Information Binding
   ========================================================================== */
function initBasicInfo() {
  // Bind simple text fields
  bindText("hero-name", CONFIG.name);
  bindText("footer-owner-name", CONFIG.name);
  bindText("hero-description", CONFIG.bio);
  bindText("about-bio-p1", CONFIG.bio);
  
  // Set Contact email/location
  const emailClean = CONFIG.socials.email.replace("mailto:", "");
  bindText("detail-email", emailClean);
  bindText("contact-email-link", emailClean);
  bindText("detail-location", CONFIG.location);
  bindText("contact-location-text", CONFIG.location);
  
  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) {
    emailLink.href = CONFIG.socials.email;
  }

  // Setup social links in footer
  const socialsContainer = document.getElementById("footer-socials-container");
  if (socialsContainer) {
    socialsContainer.innerHTML = "";
    Object.entries(CONFIG.socials).forEach(([platform, url]) => {
      if (url && url !== "#" && platform !== "resume") {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.className = "footer-social-btn";
        a.setAttribute("aria-label", platform);
        
        let iconName = platform;
        if (platform === "email") iconName = "mail";
        
        a.innerHTML = `<i data-lucide="${iconName}"></i>`;
        socialsContainer.appendChild(a);
      }
    });
  }

  // Set Profile Avatar image if custom URL is provided
  if (CONFIG.avatarUrl) {
    const avatarWrapper = document.getElementById("avatar-wrapper");
    if (avatarWrapper) {
      avatarWrapper.innerHTML = `<img src="${CONFIG.avatarUrl}" alt="${CONFIG.name}" class="avatar-img">`;
    }
  }

  // Initialize icons
  lucide.createIcons();
}

function bindText(id, text) {
  const element = document.getElementById(id);
  if (element && text) {
    element.textContent = text;
  }
}

/* ==========================================================================
   Skills Binding
   ========================================================================== */
function initSkills() {
  const container = document.getElementById("skills-categories-container");
  if (!container || !CONFIG.skills) return;

  container.innerHTML = "";
  
  // Group skills by category
  const categories = {};
  CONFIG.skills.forEach(skill => {
    const cat = skill.category || "General";
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(skill.name);
  });

  // Render category cards
  Object.entries(categories).forEach(([categoryName, skillNames]) => {
    const card = document.createElement("div");
    card.className = "skills-category-card glass-panel";
    
    // Choose appropriate Lucide icon name for category
    let iconName = "code";
    const catLower = categoryName.toLowerCase();
    if (catLower.includes("lang")) iconName = "braces";
    else if (catLower.includes("db") || catLower.includes("data")) iconName = "database";
    else if (catLower.includes("concept")) iconName = "git-commit";
    else if (catLower.includes("tool")) iconName = "tool";
    else if (catLower.includes("soft") || catLower.includes("skill")) iconName = "users";

    const skillsTagsHTML = skillNames.map(name => {
      // Pick dynamic sub-icons for specific skills
      let itemIcon = "chevron-right";
      const nameLower = name.toLowerCase();
      if (nameLower.includes("java")) itemIcon = "terminal";
      else if (nameLower.includes("python")) itemIcon = "terminal";
      else if (nameLower.includes("html") || nameLower.includes("css")) itemIcon = "layout";
      else if (nameLower.includes("github")) itemIcon = "github";
      else if (nameLower.includes("git")) itemIcon = "git-branch";
      else if (nameLower.includes("code")) itemIcon = "code";
      
      return `<div class="skill-tag"><i data-lucide="${itemIcon}" style="width: 14px; height: 14px;"></i> <span>${name}</span></div>`;
    }).join("");

    card.innerHTML = `
      <h3 class="skills-category-title">
        <i data-lucide="${iconName}" style="color: var(--accent-cyan);"></i>
        <span>${categoryName}</span>
      </h3>
      <div class="skills-category-list">
        ${skillsTagsHTML}
      </div>
    `;
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

/* ==========================================================================
   Education, Languages & Hobbies Binding
   ========================================================================== */
function initEducation() {
  const container = document.getElementById("education-timeline-container");
  if (!container || !CONFIG.education) return;

  container.innerHTML = "";
  CONFIG.education.forEach(edu => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-date">${edu.duration}</span>
        <h3 class="timeline-title">${edu.degree}</h3>
        <p class="timeline-subtitle">${edu.institution}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

/* ==========================================================================
   Achievements & Certifications Binding
   ========================================================================== */
function initAchievements() {
  const container = document.getElementById("achievements-container");
  if (!container || !CONFIG.achievements) return;

  container.innerHTML = "";
  CONFIG.achievements.forEach(ach => {
    const card = document.createElement("div");
    card.className = "project-card glass-panel";
    
    let iconName = ach.icon || "award";
    
    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-icon">
          <i data-lucide="${iconName}"></i>
        </div>
        <div class="project-links">
          <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${ach.year}</span>
        </div>
      </div>
      <h3 class="project-title" style="font-size: 1.2rem; line-height: 1.4; margin-bottom: 8px;">${ach.title}</h3>
      <h4 style="font-size: 0.95rem; color: var(--text-secondary); font-weight: 500; margin-bottom: 12px;">${ach.issuer}</h4>
      <p class="project-description" style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${ach.description}</p>
    `;
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

function initLanguages() {
  const container = document.getElementById("languages-container");
  if (!container || !CONFIG.languages) return;

  container.innerHTML = "";
  CONFIG.languages.forEach(lang => {
    const item = document.createElement("div");
    item.className = "skill-tag";
    item.innerHTML = `<i data-lucide="languages" style="width: 16px; height: 16px;"></i> <span>${lang}</span>`;
    container.appendChild(item);
  });
  lucide.createIcons();
}

function initHobbies() {
  const container = document.getElementById("hobbies-container");
  if (!container || !CONFIG.hobbies) return;

  container.innerHTML = "";
  CONFIG.hobbies.forEach(hobby => {
    const item = document.createElement("div");
    item.className = "skill-tag";
    
    let iconName = "heart";
    const hobbyLower = hobby.toLowerCase();
    if (hobbyLower.includes("book") || hobbyLower.includes("read")) iconName = "book-open";
    else if (hobbyLower.includes("game") || hobbyLower.includes("play") || hobbyLower.includes("sport")) iconName = "trophy";
    else if (hobbyLower.includes("writ")) iconName = "pen-tool";
    else if (hobbyLower.includes("tech") || hobbyLower.includes("explor")) iconName = "compass";

    item.innerHTML = `<i data-lucide="${iconName}" style="width: 16px; height: 16px;"></i> <span>${hobby}</span>`;
    container.appendChild(item);
  });
  lucide.createIcons();
}

/* ==========================================================================
   GitHub API Integration
   ========================================================================== */
async function loadGitHubProfile(username) {
  const profileCard = document.getElementById("github-profile-card");
  const reposContainer = document.getElementById("github-repos-container");
  
  if (!profileCard || !reposContainer) return;

  // Show loading state for repos
  reposContainer.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
      <i data-lucide="loader-2" class="spin" style="margin-bottom: 12px; width: 32px; height: 32px; animation: spin-clockwise 2s linear infinite;"></i>
      <p>Fetching repositories for @${username}...</p>
    </div>
  `;
  lucide.createIcons();

  try {
    // 1. Fetch User Profile
    const profileRes = await fetch(`https://api.github.com/users/${username}`);
    if (!profileRes.ok) {
      throw new Error(`User not found (${profileRes.status})`);
    }
    const profileData = await profileRes.json();

    // Bind profile elements
    const avatarImg = document.getElementById("github-avatar");
    if (avatarImg) avatarImg.src = profileData.avatar_url;
    
    // Update main hero picture if avatarUrl config is empty
    if (!CONFIG.avatarUrl && username.toLowerCase() === CONFIG.githubUsername.toLowerCase()) {
      const avatarWrapper = document.getElementById("avatar-wrapper");
      if (avatarWrapper) {
        avatarWrapper.innerHTML = `<img src="${profileData.avatar_url}" alt="${profileData.name || username}" class="avatar-img">`;
      }
    }

    bindText("github-name", profileData.name || username);
    bindText("github-bio", profileData.bio || "No bio provided.");
    
    const profileLink = document.getElementById("github-profile-link");
    if (profileLink) {
      profileLink.href = profileData.html_url;
      profileLink.textContent = `@${profileData.login}`;
    }

    bindText("github-repos-count", profileData.public_repos);
    bindText("github-followers-count", profileData.followers);
    bindText("github-following-count", profileData.following);

    // 2. Fetch User Repositories (sort by updated, get up to 6)
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!reposRes.ok) {
      throw new Error(`Failed to load repositories`);
    }
    const reposData = await reposRes.json();

    // Filter out excluded repositories
    const filteredRepos = reposData.filter(repo => {
      return !(CONFIG.excludeRepos && CONFIG.excludeRepos.includes(repo.name));
    });

    // Render repos
    reposContainer.innerHTML = "";
    if (filteredRepos.length === 0) {
      reposContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
          <i data-lucide="info" style="margin-bottom: 8px;"></i>
          <p>No public repositories found for this user.</p>
        </div>
      `;
    } else {
      filteredRepos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card glass-panel";
        
        const langBadge = repo.language ? `<span class="project-tech-tag">${repo.language}</span>` : '';
        const descText = repo.description || "No description provided.";
        
        card.innerHTML = `
          <div class="project-card-header">
            <div class="project-icon">
              <i data-lucide="git-fork"></i>
            </div>
            <div class="project-links">
              <a href="${repo.html_url}" target="_blank" class="project-link-btn" aria-label="GitHub Repository" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              ${(repo.homepage || (CONFIG.repoHomepages && CONFIG.repoHomepages[repo.name])) ? `<a href="${repo.homepage || CONFIG.repoHomepages[repo.name]}" target="_blank" class="project-link-btn" aria-label="Live Site"><i data-lucide="external-link"></i></a>` : ''}
            </div>
          </div>
          <h3 class="project-title"><a href="${repo.html_url}" target="_blank" style="color: inherit; transition: var(--transition-fast);" onmouseover="this.style.color='var(--accent-cyan)'" onmouseout="this.style.color='inherit'">${repo.name}</a></h3>
          <p class="project-description">${descText}</p>
          <div class="project-footer">
            <div class="project-tech">${langBadge}</div>
            <div class="project-stats">
              <span class="project-stat-item"><i data-lucide="star"></i> ${repo.stargazers_count}</span>
              <span class="project-stat-item"><i data-lucide="git-branch"></i> ${repo.forks_count}</span>
            </div>
          </div>
        `;
        reposContainer.appendChild(card);
      });
    }

  } catch (error) {
    console.error("Error loading GitHub profile:", error);
    
    // Display custom message in profile card bio
    const bioText = document.getElementById("github-bio");
    if (bioText) {
      bioText.textContent = `Could not load data for @${username}. The user may not exist, or GitHub API rate limits have been exceeded.`;
    }
    
    // Load fallback placeholder repos
    renderFallbackRepos(username);
  }
  
  lucide.createIcons();
}

function renderFallbackRepos(username) {
  const container = document.getElementById("github-repos-container");
  if (!container) return;

  container.innerHTML = "";
  // Generate beautiful custom mock cards to look elegant even if offline/API fails
  const mockRepos = [
    {
      name: "awesome-portfolio-template",
      description: "A visually stunning developer portfolio website built with HTML5, CSS3, and JavaScript featuring native GitHub integrations.",
      language: "JavaScript",
      stars: 12,
      forks: 3
    },
    {
      name: "nextjs-dashboard-app",
      description: "Admin panel dashboard template built using Next.js 14, Tailwind CSS, Recharts, and PostgreSQL database.",
      language: "TypeScript",
      stars: 8,
      forks: 2
    },
    {
      name: "python-automation-scripts",
      description: "A set of lightweight utility scripts to automate backups, file management, and send Slack notification alerts.",
      language: "Python",
      stars: 15,
      forks: 4
    }
  ];

  mockRepos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "project-card glass-panel";
    
    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-icon">
          <i data-lucide="git-fork"></i>
        </div>
        <div class="project-links">
          <a href="https://github.com/${username}/${repo.name}" target="_blank" class="project-link-btn" aria-label="GitHub Repository"><i data-lucide="github"></i></a>
        </div>
      </div>
      <h3 class="project-title">${repo.name}</h3>
      <p class="project-description">${repo.description} <br><em>(Offline Demo Mode)</em></p>
      <div class="project-footer">
        <div class="project-tech"><span class="project-tech-tag">${repo.language}</span></div>
        <div class="project-stats">
          <span class="project-stat-item"><i data-lucide="star"></i> ${repo.stars}</span>
          <span class="project-stat-item"><i data-lucide="git-branch"></i> ${repo.forks}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   Mobile Menu Trigger
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = menuBtn.querySelector("i");
      
      if (navMenu.classList.contains("open")) {
        icon.setAttribute("data-lucide", "x");
      } else {
        icon.setAttribute("data-lucide", "menu");
      }
      lucide.createIcons();
    });

    // Close menu when clicking nav link
    const links = navMenu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = menuBtn.querySelector("i");
        icon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      });
    });
  }
}

/* ==========================================================================
   Scroll Effects & Active Link Tracking
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById("main-header");
  
  // Scroll Progress indicator & Header scroll class toggle
  const scrollBar = document.getElementById("scroll-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    if (scrollBar) {
      scrollBar.style.width = scrolled + "%";
    }
  });

  // Reveal elements on scroll
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animates once
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => revealObserver.observe(el));

  // Active Nav Tracker on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   Hero Section Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const textContainer = document.getElementById("typed-text");
  if (!textContainer) return;

  const phrases = [
    CONFIG.title || "Full Stack Developer",
    "Open Source Contributor",
    "UI/UX Designer",
    "Creative Problem Solver"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textContainer.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      delay = 50; // Deletes faster
    } else {
      textContainer.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      delay = 150; // Typing speed
    }

    // Finished typing phrase
    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2000; // Pause at end of phrase
      isDeleting = true;
    } 
    // Finished deleting phrase
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500; // Brief pause before starting next phrase
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   Contact Form Validation & Submission Mock
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status-msg");
  
  if (!form || !statusMsg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form field elements
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const submitBtn = document.getElementById("contact-submit-btn");

    if (!name || !email || !subject || !message) {
      showStatus("Please fill out all the fields.", "error");
      return;
    }

    // Mock network request
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending... <i data-lucide="loader-2" class="spin" style="animation: spin-clockwise 2s linear infinite;"></i>`;
    lucide.createIcons();

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Send Message <i data-lucide="send"></i>`;
      lucide.createIcons();
      
      showStatus("Thank you! Your message was sent successfully.", "success");
      form.reset();
    }, 1500);
  });

  function showStatus(text, type) {
    statusMsg.className = `form-status ${type}`;
    statusMsg.textContent = text;
    
    // Auto-hide status message after 5 seconds
    setTimeout(() => {
      statusMsg.style.display = "none";
    }, 5000);
  }
}
