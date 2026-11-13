const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Python", "Spring Boot", "J2EE", "Microservices", "REST APIs"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle"]
  },
  {
    title: "Data Engineering",
    skills: ["ETL Pipelines", "Data Migration", "Data Transformation", "Data Quality Validation"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure DevOps", "CI/CD"]
  },
  {
    title: "Tools & Testing",
    skills: ["Git", "Maven", "Postman", "JUnit", "Mockito", "Great Expectations (GX)", "Domo", "Bitbucket"]
  },
  {
    title: "Other",
    skills: ["Kafka", "JWT", "RBAC", "OAuth", "OpenAI APIs"]
  }
]

function Skills() {
  return (
    <section className="skills section" id="skills">

      <p className="sectionLabel">WHAT I WORK WITH</p>
      <h2 className="sectionTitle">Technical Skills</h2>

      <div className="skillsGrid">

        {skillGroups.map((group) => (
          <div className="skillCard" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skillTags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills