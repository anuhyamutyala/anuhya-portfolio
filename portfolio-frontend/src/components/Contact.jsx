function Contact() {
  return (
    <section className="contact section" id="contact">

      <p className="sectionLabel">LET'S CONNECT</p>

      <h2 className="sectionTitle">
        Get In Touch
      </h2>

      <p className="contactIntro">
        I'm open to software engineering opportunities and would
        be happy to connect and discuss how my experience can
        contribute to your team.
      </p>

      <div className="contactContainer">

      <div className="contactInfo">

  <div className="contactItem">
    <span className="contactIcon">✉</span>

    <div>
      <p>Email</p>
      <a href="mailto:anuhyamutyala9@gmail.com">
        anuhyamutyala9@gmail.com
      </a>
    </div>
  </div>

  <div className="contactItem">
    <span className="contactIcon">☎</span>

    <div>
      <p>Phone</p>
      <a href="tel:+14696888605">
        +1 (469) 688-8605
      </a>
    </div>
  </div>

  <div className="contactItem">
    <span className="contactIcon">in</span>

    <div>
      <p>LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/srilakshmianuhya"
        target="_blank"
        rel="noreferrer"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>

  <div className="contactItem">
    <span className="contactIcon">&lt;/&gt;</span>

    <div>
      <p>GitHub</p>
      <a
        href="https://github.com/anuhyamutyala"
        target="_blank"
        rel="noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  </div>

</div>

        <form className="contactForm">

          <div className="formGroup">
            <label>Name</label>

            <input
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="formGroup">
            <label>Email</label>

            <input
              type="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="formGroup">
            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="sendButton"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact