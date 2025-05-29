import { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import './App.css';
// Import images
import HeroImg from "./profile.jpg";
import moltovImg from "./moltov.png";
import leafImg from "./leaflink.png";
import hospitalImg from "./hospital.png";
import taskImg from "./task.png";

// Default tilt options
const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

// Skill icons data
const skillIcons = {
  programming: [
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Haskell", icon: "https://skillicons.dev/icons?i=haskell" },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
    { name: "Three.js", icon: "https://skillicons.dev/icons?i=threejs" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "Electron", icon: "https://skillicons.dev/icons?i=electron" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" }
  ],
  tools: [
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Ubuntu", icon: "https://skillicons.dev/icons?i=ubuntu" },
    { name: "Eclipse", icon: "https://skillicons.dev/icons?i=eclipse" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" }
  ]
};

// Experiences data
const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company: "Amrita - Model United Nations Society",
    date: "Jan 2025 - Present",
    description: "Am collaborating with a team to build a dynamic and responsive website for Amrita Model United Nations (MUN) 2025 using Next.js, TypeScript (TSX), and Tailwind CSS. Am focusing on enhancing user experience and interface design to increase registration rates and engagement. Am implementing responsive layouts, optimizing performance, and ensuring cross-device compatibility. Am contributing to reusable UI components, smooth page transitions, and efficient routing. Am actively coordinating with team members to align design and development goals for a seamless web experience.",
    tags: ["NextJS", "MongoDB", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Zidio Development",
    date: "Feb 2025 - Mar 2025",
    description: "Collaborated with a team to develop a project management application using the MERN stack as part of a competitive development challenge. The application featured robust authentication mechanisms, distinct user and admin panels, and seamless task management functionalities tailored to specific user roles. Throughout the project, I gained valuable hands-on experience with Git for version control, enhanced my ability to work effectively in a team environment, and took on leadership responsibilities that helped streamline workflows and ensure timely implementation of key features.",
    tags: ["ReactJS", "Node js", "MongoDB"]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Simulate Spotify now playing
  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      image: taskImg,
      description: "An intern project developed for Zidio Development using the MERN stack. This task management system supports admin and user roles, enabling task creation, and a dashboard displaying task.",
      tags: ["MongoDB", "Node.js", "ReactJS", "Tailwind CSS"],
      link: "https://github.com/SudharsanSaravanan/MOLTOV-StreamingApp",
      duration: ""
    },
    {
      id: 2,
      title: "Moltov",
      image: moltovImg,
      description: "Movie Trailer Streaming App using React js and firebase. The application fetches real-time movie data from The Movie Database (TMDB) API and presents it in an intuitive, visually appealing interface.",
      tags: ["React js", "Node.js", "Axios", "FireBase"],
      link: "https://github.com/SudharsanSaravanan/MOLTOV-StreamingApp",
      duration: ""
    },
    {
      id: 3,
      title: "Leaf-Link",
      image: leafImg,
      description: "Real-Time Messaging Application using React.js and Firestore. Created responsive design with Bootstrap 5 and Material UI, enabling seamless communication with instant message updates.",
      tags: ["React js", "FireStore", "Material UI", "FireBase"],
      link: "https://github.com/SudharsanSaravanan/Leaf-Link-MessagingApp",
      duration: ""
    },
    {
      id: 4,
      title: "Hospital Management System",
      image: hospitalImg,
      description: "DSA-Based Project. Implemented a Priority Queue, Graph, and BST to prioritize patient care based on severity, age, and arrival time.",
      tags: ["Python"],
      link: "https://github.com/SudharsanSaravanan/Hospital_Mangement_System",
      duration: ""
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsNavOpen(false);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}>
      {/* Sidebar/Navigation */}
      <aside className={`sidebar ${isNavOpen ? 'open' : ''}`}>
        <div className="logo">
          <span>✧ / ✧</span>
        </div>

        <nav className="nav-menu">
          {['home', 'about', 'experience', 'projects', 'resume', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              <span className="nav-icon">
                {section === 'home' && <i className="fas fa-home"></i>}
                {section === 'about' && <i className="fas fa-user"></i>}
                {section === 'experience' && <i className="fas fa-briefcase"></i>}
                {section === 'projects' && <i className="fas fa-folder"></i>}
                {section === 'resume' && <i className="fas fa-file"></i>}
                {section === 'contact' && <i className="fas fa-envelope"></i>}
              </span>
              <span className="nav-text">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </button>
          ))}
        </nav>

        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="mobile-header">
          <div className="mobile-logo">
            <span>✧ Sudharsana Saravanan S ✧</span>
          </div>
          <button onClick={toggleTheme} className="mobile-theme-toggle">
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>

        <div className="content-wrapper">
          {/* Hero Section */}
          <section id="home" className="hero-section">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text"
              >
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Sudharsan</span>
                </h1>
                <p className="hero-subtitle">Aspiring Software Engineer</p>
                <p className="hero-description">Crafting seamless digital experiences through code and creativity</p>
                <div className="hero-buttons">
                  <button className="spotify-button primary" onClick={() => handleNavClick('projects')}>
                    View My Work <i className="fas fa-code"></i>
                  </button>
                  <a href={require("./resume.pdf")} target="_blank" rel="noopener noreferrer" className="spotify-button secondary">
                    Resume <i className="fas fa-file-alt"></i>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image-container"
              >
                <div className="profile-image-wrapper">
                  <img src={HeroImg} alt="Sudharsan" className="profile-image" />
                  <div className="equalizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="wave-container">
              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section about-section">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
              >
                About Me
              </motion.h2>

              <div className="about-content">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="about-text"
                >
                  <p className="about-description">
                    I am a passionate software engineer and web developer specializing in creating intuitive and engaging user interfaces. 
                    With expertise in React, JavaScript, TypeScript, and modern web technologies, I build seamless digital experiences. 
                    Additionally, I have a strong foundation in Data Structures and Algorithms (DSA), enabling me to develop optimized 
                    and efficient solutions for complex problems.
                  </p>
                </motion.div>

                <div className="skills-container">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="skills-card"
                  >
                    <h3>Programming Languages & Frameworks</h3>
                    <div className="skills-grid">
                      {skillIcons.programming.map((skill, index) => (
                        <div key={index} className="skill-item" title={skill.name}>
                          <img src={skill.icon} alt={skill.name} />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="skills-card"
                  >
                    <h3>Tools and Technologies</h3>
                    <div className="skills-grid">
                      {skillIcons.tools.map((skill, index) => (
                        <div key={index} className="skill-item" title={skill.name}>
                          <img src={skill.icon} alt={skill.name} />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="education-section"
                >
                  <h3 className="sub-section-title">Education</h3>
                  <div className="education-cards">
                    <div className="education-card">
                      <div className="education-icon">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div className="education-details">
                        <h4>Bachelor of Technology in Computer Science</h4>
                        <p className="school">Amrita Vishwa Vidyapeetham</p>
                        <p className="year">2023 - 2027</p>
                        <p className="gpa">CGPA: 7.68/10</p>
                      </div>
                    </div>

                    <div className="education-card">
                      <div className="education-icon">
                        <i className="fas fa-school"></i>
                      </div>
                      <div className="education-details">
                        <h4>High School</h4>
                        <p className="school">Stanes School ICSE, CBE</p>
                        <p className="year">2016 - 2023</p>
                        <p className="gpa">Grade 10: 90 %</p>
                        <p className="gpa">Grade 12: 85 %</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section experience-section">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
              >
                Experience
              </motion.h2>

              <div className="timeline">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="timeline-item"
                  >
                    <div className="timeline-icon">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">{experience.date}</div>
                      <h3>{experience.title}</h3>
                      <p className="company">{experience.company}</p>
                      <p className="experience-description">{experience.description}</p>
                      <div className="experience-tags">
                        {experience.tags.map((tag, i) => (
                          <span key={i} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section projects-section">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
              >
                <i className="fas fa-project-diagram"></i> Top Projects
              </motion.h2>

              <div className="projects-playlist">
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Tilt options={defaultTiltOptions} className="project-tilt">
                        <div className="project-card">
                          <div className="project-image">
                            <img src={project.image} alt={project.title} />
                          </div>
                          <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                              ))}
                            </div>
                            <div className="project-footer">
                              <span className="duration">{project.duration}</span>
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fab fa-github"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Tilt>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="section resume-section">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
              >
                Resume
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="resume-content"
              >
                <div className="resume-card">
                  <div className="resume-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="resume-text">
                    <p>View or download my resume to learn more about my experience and skills.</p>
                    <a
                      href={require("./resume.pdf")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotify-button primary"
                    >
                      View Resume PDF <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section contact-section">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
              >
                Get In Touch
              </motion.h2>

              <div className="contact-content">
                <motion.form
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="spotify-button primary">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </motion.form>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="contact-info"
                >
                  <div className="social-links">
                    <a href="https://github.com/SudharsanSaravanan" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/sudharsana-saravanan-s-456544299/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                    <a href="mailto:sudharsansaravanan2623@gmail.com" className="social-link">
                      <i className="fas fa-envelope"></i>
                      <span>Email</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;