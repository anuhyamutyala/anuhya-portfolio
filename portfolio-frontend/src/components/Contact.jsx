import { useState } from "react"

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
        "http://localhost:8080/api/contact",
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

      setStatus("Something went wrong. Please try again.")

    } finally {
      setLoading(false)
    }
  }


  return (
    <section className="contact section" id="contact">


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
            required
          />
        </div>

        <button
          type="submit"
          className="sendButton"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>

        {status && (
          <p className="formStatus">
            {status}
          </p>
        )}

      </form>

    </section>
  )
}

export default Contact