import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logoDot"></span>
          Portfolio
        </a>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">

          <div className="heroContent">

            <p className="hello">Hi, I'm</p>

            <h1>Srilakshmi Anuhya Mutyala</h1>

            <h2>Software Engineer</h2>

            <p className="description">
              Software Engineer with 3+ years of experience building
              scalable enterprise applications using Java, Spring Boot,
              Microservices, React.js, REST APIs, and cloud technologies.
            </p>

            <div className="buttons">

              <a href="#projects" className="primaryButton">
                View My Work
                <span>→</span>
              </a>

              <a href="#resume" className="secondaryButton">
                Download Resume
                <span>↓</span>
              </a>

            </div>

          </div>

          <div className="heroDecoration">
            <div className="glow glowOne"></div>
            <div className="glow glowTwo"></div>

            <div className="codeCard">
              <span>&lt;developer&gt;</span>

              <p>
                Java • Spring Boot
              </p>

              <p>
                Microservices • React
              </p>

              <span>&lt;/developer&gt;</span>
            </div>
          </div>

        </section>

        <About />
        <Experience />
        <Projects/>
        <Skills />
        <Education />
        <Contact />
      </main>

    </div>
  )
}

export default App