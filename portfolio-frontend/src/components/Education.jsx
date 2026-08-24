function Education() {
  return (
    <section className="education section" id="education">

      <p className="sectionLabel">ACADEMIC BACKGROUND</p>
      <h2 className="sectionTitle">Education</h2>

      <div className="educationList">

        {/* MASTER'S */}
        <div className="educationCard">

          <div className="educationIcon">
            🎓
          </div>

          <div className="educationContent">

            <h3>Master of Science in Computer Science</h3>

            <h4>University of Central Missouri</h4>

            <p className="educationLocation">
              Warrensburg, Missouri
            </p>

            <div className="educationDetails">
              <span>Jan 2025 – May 2026</span>

              <span className="educationDivider"></span>

              <span>GPA: 3.6 / 4.0</span>
            </div>

          </div>

        </div>


        {/* BACHELOR'S */}
        <div className="educationCard">

          <div className="educationIcon">
            🎓
          </div>

          <div className="educationContent">

            <h3>Bachelor of Technology in Computer Science</h3>

            <h4>
              Godavari Institute of Engineering and Technology
            </h4>

            <div className="educationDetails">
                <span>June 2018 – June 2022</span>
                <span className="educationDivider"></span>

              <span>GPA: 8.1 / 10</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education