const projects = [
  {
    title: "AI-Powered Incident Management System",
    description:
      "A full-stack incident management platform that supports the complete incident lifecycle from creation to resolution. The application includes secure authentication, role-based access, intelligent incident analysis, caching, search, and AI-powered recommendations.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "JWT",
      "RBAC",
      "Redis",
      "Elasticsearch",
      "OpenAI API"
    ],
    featured: true
  },

  {
    title: "College Information Chatbot",
    description:
      "A web-based NLP chatbot built to automatically answer student queries about college activities and information, reducing the need for in-person assistance.",
    technologies: [
      "Python",
      "NLP",
      "Web Application"
    ],
    featured: false
  },

  {
    title: "Home Service Management System",
    description:
      "A full-stack home service platform supporting service slot booking, reviews, and separate Admin and User workflows.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Role-Based Flows"
    ],
    featured: false
  }
]

function Projects() {
  return (
    <section className="projects section" id="projects">

      <p className="sectionLabel">WHAT I'VE BUILT</p>
      <h2 className="sectionTitle">Featured Projects</h2>

      <div className="projectsContainer">

        {projects.map((project, index) => (

          <div
            className={
              project.featured
                ? "projectCard featuredProject"
                : "projectCard"
            }
            key={index}
          >

            {project.featured && (
              <span className="featuredLabel">
                FEATURED PROJECT
              </span>
            )}

            <h3>{project.title}</h3>

            <p className="projectDescription">
              {project.description}
            </p>

            <div className="projectTech">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects
