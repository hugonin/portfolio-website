import React from "react"

import "./contact.styles.css"

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact" data-nav="Contact">
        <h2 className="title-contact">Contact</h2>
        <p className="first-subtitle-contact">Interested in My Work?</p>

        <div className="contact-form">
          <form className="contact-form" action="#" method="POST">
            <label for="fname" className="fname-label"></label>
            <input
              className="field-input"
              id="fname"
              type="text"
              placeholder="Your name"
            />

            <label for="email" className="email-label"></label>
            <input
              className="field-input"
              id="email"
              type="email"
              placeholder="Your email address"
            />

            <label for="message" className="message-label"></label>
            <textarea
              className="message-textarea"
              id="message"
              placeholder="Leave Me A Message "
            ></textarea>

            <button className="btn">send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
