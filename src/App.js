import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import HeroImg from "./profile.jpg";
import MoltovImg from "./moltov.png";
import leafImg from "./leaflink.png";
import hospitalImg from "./hospital.png";

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
                    loop: false,
                    deleteSpeed: Infinity,
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
            <p className="title">Software Engineer</p>
            <p className="subtitle">Crafting seamless digital experiences through code and creativity</p>
            <div className="cta-buttons">
              <button className="cta-button" onClick={() => handleNavClick('projects')}>
                View My Work →
              </button>
              <a href={require("./resume.pdf")} target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src={HeroImg} alt="sudharsan" />
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
              <p>I am a passionate software engineer and web developer specializing in creating intuitive and engaging user interfaces. With expertise in React, JavaScript, TypeScript, and modern web technologies, I build seamless digital experiences. Additionally, I have a strong foundation in Data Structures and Algorithms (DSA), enabling me to develop optimized and efficient solutions for complex problems.</p>
              
              <div className="skills-container">
  <div className="skills-card">
    <h3>Programming Languages & Frameworks</h3>
    <div className="skills-grid">
      <img src="https://skillicons.dev/icons?i=c,cpp,py,java,firebase,vercel,js,html,css,react,nodejs,mysql,materialui,haskell,electron,redux,eclipse,vscode,powershell&perline=6" alt="programming" />
    </div>
  </div>
  <div className="skills-card">
    <h3>Tools and Technologies</h3>
    <div className="skills-grid">
      <img src="https://skillicons.dev/icons?i=git,github,linux,ubuntu,matlab,bootstrap" alt="React" />
    </div>
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
                  <p className="gpa">Grade 10: 90 %</p>
                  <p className="gpa">Grade 12: 85 %</p>
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
                <h3>React Web Application Development</h3>
                <p><br/></p>
                <p className="company">Personal</p>
                <p className="period">Dec 2024 - Jan 2025</p>
                <p><br/></p>
                <p>Led the development of multiple React applications and mentored junior developers. I have built personal projects like 'Leaf Link', a messaging app, and 'Moltov', a movie trailer streaming app using APIs and React. These projects showcase my expertise in building seamless user experiences, managing state efficiently, and integrating external data sources to enhance functionality.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">

<div className="project-card">
  <div className="project-image">
    <img src={MoltovImg} alt="Moltov Project" />
  </div>
  <div className="project-content">
    <h3>Moltov</h3>
    <p>Movie Trailer Streaming App using React js and firebase. The application fetches real-time movie data from The Movie Database (TMDB) API and presents it in an intuitive, visually appealing interface.</p>
    <div className="project-tags">
      <span className="tag">React js</span>
      <span className="tag">Node.js</span>
      <span className="tag">Axios</span>
      <span className="tag">FireBase</span>
    </div>
    <a href="https://github.com/SudharsanSaravanan/MOLTOV-StreamingApp" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-image">
    <img src={leafImg} alt="Leaf-Link Project" />
  </div>
  <div className="project-content">
    <h3>Leaf-Link Messaging Application</h3>
    <p>Real-Time Messaging Application using React js and FireStore (DataBase). Created responsive design with Bootstrap 5 and Material UI</p>
    <div className="project-tags">
      <span className="tag">React js</span>
      <span className="tag">FireStore</span>
      <span className="tag">Material UI</span>
    </div>
    <a href="https://github.com/SudharsanSaravanan/Leaf-Link-MessagingApp" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-image">
    <img src={hospitalImg} alt="Hospital Management" />
  </div>
  <div className="project-content">
    <h3>Hospital Management System</h3>
    <p>DSA-Based Project. Implemented a Min-Heap Priority Queue, Graph (Adjacency List), and Binary Search Tree (BST) to prioritize patient care based on severity, age, and arrival time. Utilized Dijkstra’s algorithm for room allocation and optimized operations for fast admission, discharge, and search, enhancing hospital efficiency and patient care.</p>
    <div className="project-tags">
      <span className="tag">Python</span>
    </div>
    <a href="https://github.com/SudharsanSaravanan/Hospital_Mangement_System" className="project-link">View Project →</a>
  </div>
</div>

          </div>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <div className="container">
          <h2>Resume</h2>
          <div className="resume-content">
          <p>View or download my resume to learn more about my experience and skills.</p>
          <a 
           href={require("./resume.pdf")} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="download-button"
          >
            View Resume PDF
          </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <form
        className="contact-form"
        action="mailto:sudharsansaravanan2623@gmail.com"
        method="post"
        encType="text/plain"
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
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
            <div className="contact-info">
              <div className="social-links">
                <a href="https://github.com/SudharsanSaravanan" className="social-link">GitHub</a>
                <a href="https://www.linkedin.com/in/sudharsan-saravanan-456544299/" className="social-link">LinkedIn</a>
                <a href="mailto:sudharsansaravanan2623@gmail.com" className="social-link">Mail</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;