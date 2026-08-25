import { useState } from "react"

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setStatus("")

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      if (!response.ok) {
        throw new Error("Unable to send message")
      }

      setStatus("Message sent successfully!")

      setFormData({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      console.error(error)

      setStatus(
        "Something went wrong. Please try again."
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">

      <p className="sectionLabel">
        LET'S CONNECT
      </p>

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
            <span className="contactIcon">
              in
            </span>

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
            <span className="contactIcon">
              &lt;/&gt;
            </span>

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

        <form
          className="contactForm"
          onSubmit={handleSubmit}
        >

          <div className="formGroup">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              maxLength="100"
              required
            />
          </div>

          <div className="formGroup">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              maxLength="150"
              required
            />
          </div>

          <div className="formGroup">
            <label>Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your message..."
              maxLength="2000"
              required
            />
          </div>

          <button
            type="submit"
            className="sendButton"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Message →"}
          </button>

          {status && (
            <p className="formStatus">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  )
}

export default Contact