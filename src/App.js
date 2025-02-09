import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">✧Sudharsan</div>
        <div className="nav-links">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          {['home', 'about', 'experience', 'projects', 'resume', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="typewriter-container" style={{ fontSize: "3rem", fontWeight: "bold", display: "flex" }}>
                {!showText ? (
                <Typewriter
                options={{
                  strings: ["Hi, I'm Sudharsan"],
                  autoStart: true,
                  delay: 75,
                  cursor: "|",
                  loop: false, // Ensure looping is disabled
                  deleteSpeed: Infinity, // Prevents deleting
                }}
                onInit={(typewriter) => {
                  typewriter.callFunction(() => setShowText(true)).start();
                }}
                />
                ) : (
                <span className="typed-text">
                  Hi, I'm Sudharsan<span className="blinking">|</span>
                </span>
                )}
            </h1>
            <p className="title">Frontend Developer</p>
            <p className="subtitle">Building beautiful web experiences</p>
            <div className="cta-buttons">
              <button className="cta-button" onClick={() => handleNavClick('projects')}>
                View My Work →
              </button>
              <a href="/resume.pdf" download className="cta-button secondary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="your-photo.jpg" alt="Your Name" />
            </div>
          </div>
        </div>
        <div className="blob"></div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user interfaces. With expertise in React and modern web technologies, I transform ideas into seamless digital experiences.</p>
              
              <div className="skills-card">
                <h3>Programming Languages & Frameworks</h3>
                <div className="skills-grid">
                  <img src="https://skillicons.dev/icons?i=c,cpp,py,java,firebase,vercel,js,html,css,react,nodejs,mysql,flask,tailwind,express,nodejs,materialui,haskell,eclipse,vscode,powershell" alt="programming" />
                  {/* Add more skills as needed */}
                </div>
              </div>
              <div className="skills-card">
                <h3>Tools and Technologies</h3>
                <div className="skills-grid">
                  <img src="https://skillicons.dev/icons?i=git,github,linux,ubuntu,matlab,bootstrap" alt="React" />
                  {/* Add more skills as needed */}
                </div>
              </div>

              <div className="education-section">
                <h3>Education</h3>
                <div className="education-card">
                  <h4>Bachelor of Technology in Computer Science</h4>
                  <p className="school">Amrita Vishwa Vidyapeetham</p>
                  <p className="year">2023 - 2027</p>
                  <p className="gpa">CGPA: 7.5/10</p>
                </div>
                  <div className="education-card">
                  <h4>High School</h4>
                  <p className="school">Stanes School ICSE, CBE</p>
                  <p className="year">2016 - 2023</p>
                  <p className="gpa">GRADE-10: 90%</p>
                  <p className="gpa">GRADE-12: 89%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Senior Frontend Developer</h3>
                <p className="company">Tech Company</p>
                <p className="period">2022 - Present</p>
                <p>Led development of multiple React applications and mentored junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Web Developer</h3>
                <p className="company">Digital Agency</p>
                <p className="period">2020 - 2022</p>
                <p>Developed responsive websites and web applications for various clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <div className="project-image">
                  <div className="image-project"></div>
                </div>
                <div className="project-content">
                  <h3>Project {project}</h3>
                  <p>A brief description of the project and the technologies used.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                  </div>
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <div className="container">
          <h2>Resume</h2>
          <div className="resume-content">
            <p>Download my resume to learn more about my experience and skills.</p>
            <a href="/resume.pdf" download className="download-button">
              Download Resume PDF
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <form className="contact-form">
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
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Mail</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;