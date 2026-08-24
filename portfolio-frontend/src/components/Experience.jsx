import { useState } from "react"

const experiences = [
  {
    role: "Java Developer",
    company: "Technivio",
    period: "Jan 2026 - May 2026",
    points: [
      "Developed a full-stack Incident Management System using Java, Spring Boot, React.js, MySQL, and RESTful APIs, supporting the complete incident lifecycle from creation to resolution.",
      "Designed and implemented secure REST APIs with JWT-based authentication, Role-Based Access Control, and Spring Data JPA.",
      "Built scalable backend modules following microservices architecture.",
      "Integrated Redis caching and Elasticsearch to improve application performance and reduce API response times.",
      "Developed unit and integration tests using JUnit and Mockito.",
      "Participated in debugging, defect fixing, and code reviews to maintain application quality and reliability.",
      "Integrated OpenAI APIs for incident summarization, priority classification, and resolution recommendations.",
      "Reduced manual incident triage effort by approximately 40% through AI-powered automation."
    ]
  },

  {
    role: "Associate Software Developer",
    company: "BMO / Virtusa",
    period: "May 2022 - Nov 2024",
    points: [
      "Developed enterprise banking applications using Java, Spring Boot, and Microservices for core banking systems.",
      "Designed and implemented RESTful APIs for user management, account, and transaction services.",
      "Integrated backend services with internal and external systems.",
      "Analyzed and documented 5,000+ lines of legacy Java code to understand business logic and support modernization efforts.",
      "Designed and optimized batch processing applications for high-volume financial transactions.",
      "Developed and maintained event-driven microservices using Kafka for reliable asynchronous communication.",
      "Created unit and integration tests using JUnit and Mockito, achieving 90%+ code coverage.",
      "Built and maintained Azure DevOps CI/CD pipelines with Docker-based deployments.",
      "Reduced deployment time by approximately 40% through automated build, testing, and release processes.",
      "Optimized Oracle and PostgreSQL database performance by improving SQL queries, indexing strategies, and schema design.",
      "Authored technical documentation, participated in code reviews, and collaborated with cross-functional Agile teams.",
      "Resolved production defects and performed application maintenance.",
      "Monitored production services, performed root cause analysis, troubleshot critical issues, and implemented performance improvements."
    ]
  },

  {
    role: "Software Intern",
    company: "Virtusa",
    period: "Jan 2022 - Mar 2022",
    points: [
      "Developed full-stack web applications using Java, Spring Boot, React.js, HTML5, CSS, and MySQL.",
      "Built and consumed REST APIs for frontend-backend integration.",
      "Implemented CRUD operations using JDBC and MySQL.",
      "Developed responsive UI components and integrated them with backend services.",
      "Updated application features based on stakeholder feedback."
    ]
  }
]

function Experience() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExperience = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="experience section" id="experience">

      <p className="sectionLabel">MY JOURNEY</p>
      <h2 className="sectionTitle">Professional Experience</h2>

      <div className="timeline">

        {experiences.map((experience, index) => {

          const isExpanded = expandedCards[index]

          const visiblePoints = isExpanded
            ? experience.points
            : experience.points.slice(0, 4)

          return (
            <div className="timelineItem" key={index}>

              <div className="timelineMarker">
                <span></span>
              </div>

              <div className="experienceCard">

                <div className="experienceHeader">

                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <p className="experiencePeriod">
                    {experience.period}
                  </p>

                </div>

                <ul>
                  {visiblePoints.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {point}
                    </li>
                  ))}
                </ul>

                {experience.points.length > 4 && (
                  <button
                    className="showMoreButton"
                    onClick={() => toggleExperience(index)}
                  >
                    {isExpanded ? "Show Less ↑" : "Show More ↓"}
                  </button>
                )}

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Experience