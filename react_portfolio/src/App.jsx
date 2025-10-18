import React, { useState, useEffect, useRef } from 'react';


const Header = ({ theme, toggleTheme, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="nav-logo">
          VISWAS
        </a>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <button
              className="theme-switcher"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section id="home">
    <img
      src="https://avatars.githubusercontent.com/u/123818703?v=4"
      alt="TUMBALI VENKATA VISWAS"
      className="profile-photo"
    />
    <h1>TUMBALI VENKATA VISWAS</h1>
    <p className="role">AI/ML & Data Science Engineer</p>
    <p className="tagline">
      Aspiring Machine Learning Engineer passionate about building real-world AI
      solutions, with skills in ML, Deep Learning, NLP, and MLOps. Eager to
      contribute to organizations driving AI and technology innovation.
    </p>
    <div className="hero-socials">
      <a
        href="https://linkedin.com/in/VenkataViswas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/venkataviswas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://leetcode.com/VenkataViswas/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <i className="fas fa-code"></i>
      </a>
      <a
        href="mailto:tumbalivenkataviswas@gmail.com"
        aria-label="Email me"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
    <a href="./VenkataViswasTumbali.pdf" download className="btn">
      <i className="fas fa-download"></i> Download Resume
    </a>
  </section>
);

const About = () => (
  <section id="about" className="container">
    <h2>About Me</h2>
    <div className="about-content glass-card">
      <p className="about-text">
        I am an aspiring <strong>Machine Learning Engineer</strong> passionate
        about <strong>building real-world AI solutions</strong>. Skilled in{" "}
        <strong>Machine Learning</strong>, <strong>Deep Learning</strong>,{" "}
        <strong>Natural Language Processing (NLP)</strong>, and{" "}
        <strong>MLOps</strong>, I have hands-on experience with technologies
        like <strong>Python</strong>, <strong>TensorFlow</strong>,{" "}
        <strong>Scikit-Learn</strong>, <strong>Flask</strong>, and{" "}
        <strong>Docker</strong>. I am also familiar with{" "}
        <strong>model deployment practices</strong>,{" "}
        <strong>API development</strong>, and <strong>cloud platforms</strong>{" "}
        like <strong>AWS</strong>, allowing me to take machine learning models
        from experimentation to production. My learning journey has taught me
        to <strong>think critically</strong>,{" "}
        <strong>solve problems efficiently</strong>, and{" "}
        <strong>adapt to new technologies quickly</strong>.
      </p>
      <div className="highlights">
        <span className="highlight-item">Machine Learning</span>
        <span className="highlight-item">Deep Learning</span>
        <span className="highlight-item">NLP</span>
        <span className="highlight-item">MLOps</span>
        <span className="highlight-item">API Development</span>
        <span className="highlight-item">Problem Solving</span>
        <span className="highlight-item">Full Stack Development</span>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="container">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-card glass-card">
        <i className="fas fa-chart-line"></i>
        <h3>Data Science Tools</h3>
        <p>PowerBI, Numpy, Pandas, Seaborn, Matplotlib, Sklearn, Flask , NLTK , gensim  </p>
      </div>
      <div className="skill-card glass-card">
        <i className="fas fa-code"></i>
        <h3>Programming Languages</h3>
        <p>Python, Java, C++</p>
      </div>
      <div className="skill-card glass-card">
        <i className="fas fa-globe"></i>
        <h3>Web Development</h3>
        <p>HTML, CSS, JavaScript, NodeJS, ExpressJS, MERN, Flask</p>
      </div>
      <div className="skill-card glass-card">
        <i className="fas fa-cloud"></i>
        <h3>Cloud & DevOps</h3>
        <p>AWS, Docker, Kubernetes (Basic), Jenkins, GitHub Actions, ArgoCD</p>
      </div>
      <div className="skill-card glass-card">
        <i className="fas fa-code-branch"></i>
        <h3>Version Control</h3>
        <p>Git, GitHub</p>
      </div>
      <div className="skill-card glass-card">
        <i className="fas fa-desktop"></i>
        <h3>Operating Systems</h3>
        <p>Linux, Ubuntu, Windows</p>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="container">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card glass-card">
        <div className="project-content">
          <h3>End-to-End ML Project Deployment</h3>
          <p>
            Built a complete ML pipeline from data ingestion, cleaning, and
            feature engineering to model training and evaluation. Designed a
            clean project structure with logging, configuration management,
            and CI/CD readiness.
          </p>
          <div className="tech-stack">
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>CI/CD</span>
            <span>GitHub Actions</span>
            <span>AWS EC2</span>
          </div>
          <a
            href="https://github.com/VenkataViswas/From-Raw-Data-to-Deployment-An-End-to-End-ML-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
            <div className="project-card glass-card">
        <div className="project-content">
          <h3>Text Classification using NLTK & Machine Learning</h3>
          <p>
            Built a text classification pipeline for spam detection using
            <strong> NLTK </strong> and <strong> scikit-learn</strong>. Included data
            cleaning, tokenization, stopword removal, lemmatization, and Bag of Words
            feature extraction with a Naive Bayes classifier.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>NLTK</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>Jupyter Notebook</span>
          </div>

          <p className="mt-2">
            Achieved <strong>98.47% accuracy</strong> with excellent precision and recall
            for both spam and ham messages.
          </p>

          <a
            href="https://github.com/VenkataViswas/Text-Classification-using-NLTK-and-ML"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>

      <div className="project-card glass-card">
        <div className="project-content">
          <h3>Sentiment Analysis using Custom Avg Word2Vec & Logistic Regression</h3>
          <p>
            Designed a sentiment analysis model using custom <strong>Word2Vec</strong>
            embeddings averaged per sentence and classified with
            <strong> Logistic Regression</strong>. Preprocessing included tokenization,
            lowercasing, and stopword removal.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Gensim</span>
            <span>Scikit-learn</span>
            <span>NumPy</span>
            <span>Jupyter Notebook</span>
          </div>

          <p className="mt-2">
            Reached <strong>81.75% accuracy</strong> with balanced precision and recall
            across positive and negative sentiments.
          </p>

          <a
            href="https://github.com/VenkataViswas/Sentiment-Analysis-using-Custom-Word2Vec-and-Logistic-Regression"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>

      <div className="project-card glass-card">
        <div className="project-content">
          <h3>Algeria FireWatch Risk Estimator</h3>
          <p>
            Developed a fire-risk prediction system using Ridge Regression (R²
            score of 0.98 on FWI). Built a web interface with Flask and
            deployed using AWS EC2. Performed extensive data preprocessing
            and evaluation.
          </p>
          <div className="tech-stack">
            <span>Ridge Regression</span>
            <span>Flask</span>
            <span>AWS EC2</span>
            <span>Data Preprocessing</span>
          </div>
          <a
            href="https://github.com/VenkataViswas/Algeria-FireWatch-Real-time-Risk-Estimator"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card glass-card">
        <div className="project-content">
          <h3>Holiday Package Purchase Prediction</h3>
          <p>
            Developed a customer purchase prediction model using Random
            Forest, achieving 85% accuracy. Performed data cleaning, missing
            value handling, and categorical feature encoding. Conducted EDA to
            uncover patterns.
          </p>
          <div className="tech-stack">
            <span>Random Forest</span>
            <span>Data Cleaning</span>
            <span>EDA</span>
            <span>Machine Learning</span>
          </div>
          <a
            href="https://github.com/VenkataViswas/Holiday-Package-Purchase-Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card glass-card">
        <div className="project-content">
          <h3>Predicting Used Car Prices</h3>
          <p>
            Developed an end-to-end ML pipeline to predict used car prices.
            Performed data cleaning, EDA, and feature engineering. Trained and
            evaluated multiple models, achieving R² = 0.94 on test data with
            Random Forest.
          </p>
          <div className="tech-stack">
            <span>Scikit-learn</span>
            <span>Advanced Algos</span>
            <span>Feature Engineering</span>
            <span>EDA</span>
          </div>
          <a
            href="https://github.com/VenkataViswas/Used-Car-Price-Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card glass-card">
        <div className="project-content">
          <h3>Customer Churn Prediction using ANN</h3>
          <p>
            Built an artificial neural network to predict telecom customer
            churn with <strong>83.25% accuracy</strong>. Preprocessed data
            using one-hot encoding and scaling. Trained using the{" "}
            <strong>Adam optimizer</strong> and{" "}
            <strong>binary cross-entropy loss</strong>.
          </p>
          <div className="tech-stack">
            <span>TensorFlow</span>
            <span>Keras</span>
            <span>ANN</span>
            <span>TensorBoard</span>
            <span>Data Preprocessing</span>
          </div>
          <a
            href="https://github.com/VenkataViswas/Customer-Churn-Prediction-using-ANN"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="container">
    <h2>Experience</h2>
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-content glass-card">
          <h3>PowerBI Intern</h3>
          <p className="role">Dosoft Technologies</p>
          <p className="date">May 2024 - June 2024</p>
          <ul>
            <li>
              Developed and designed interactive dashboards and
              visualizations using tools like Power BI.
            </li>
            <li>
              Analyzed large datasets to extract actionable insights and
              presented findings to stakeholders.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="container">
    <h2>Education</h2>
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-content glass-card">
          <h3>M.Tech CSE DS.</h3>
          <p className="institution">
            Gandhi Institute of Technology and Management - GITAM
          </p>
          <p className="date">2025 - 2027</p>
          <p className="grade">Course not yet completed</p>
        </div>
      </div>
      <div className="timeline-item right">
        <div className="timeline-content glass-card">
          <h3>B.Tech in CSE DS.</h3>
          <p className="institution">
            Anil Neerukonda Institute of Technology and Sciences - ANITS
          </p>
          <p className="date">2021 - 2025</p>
          <p className="grade">CGPA: 8.95/10</p>
        </div>
      </div>
      <div className="timeline-item left">
        <div className="timeline-content glass-card">
          <h3>Intermediate - MPC</h3>
          <p className="institution">Tirumala Junior College, Visakhapatnam</p>
          <p className="date">2019 - 2021</p>
          <p className="grade">Marks: 958/1000</p>
        </div>
      </div>
      <div className="timeline-item right">
        <div className="timeline-content glass-card">
          <h3>SSC Class - X</h3>
          <p className="institution">SFS High School, Visakhapatnam</p>
          <p className="date">2018 - 2019</p>
          <p className="grade">CGPA: 8.8/10</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container">
    <div className="glass-card" style={{ padding: "40px 20px" }}>
      <h2>Get In Touch</h2>
      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of an amazing team. Feel free to reach out!
      </p>
      <a href="mailto:tumbalivenkataviswas@gmail.com" className="btn">
        Say Hello <i className="fas fa-paper-plane"></i>
      </a>
      <div className="contact-socials">
        <a
          href="https://linkedin.com/in/VenkataViswas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/venkataviswas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:tumbalivenkataviswas@gmail.com"
          aria-label="Email me"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Tumbali Venkata Viswas. All Rights Reserved.</p>
  </footer>
);

// --- Main App Component ---
export default function App() {
  // --- Theme State ---
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // --- Scrollspy and Animation State ---
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          setActiveSection(id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionRefs.current[section.id] = section;
      observer.observe(section);
    });

    // Manually trigger for home section on initial load
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.classList.add("visible");
    }

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}