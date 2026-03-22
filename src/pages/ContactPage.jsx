import { useState } from "react";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import "./ContactPage.css";

export function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks — this is a demo form. Connect via LinkedIn or email below.");
  };

  return (
    <>
      <InteractiveBackground />
      <Header />
      <main className="contact-page">
        <div className="contact-inner">
          <section className="contact-cta" aria-labelledby="contact-cta-heading">
            <h1 id="contact-cta-heading" className="contact-cta-heading">
              Let&apos;s work together on your next project!
            </h1>
            <div className="contact-social">
              <a
                href="https://www.linkedin.com/in/wysophia-wan"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <img src="/LinkedIn.svg" alt="" className="contact-social-icon" />
              </a>
              <a
                href="mailto:sophiawan4419@gmail.com"
                className="contact-social-link"
                aria-label="Email"
              >
                <img src="/email.svg" alt="" className="contact-social-icon" />
              </a>
            </div>
          </section>

          <section className="contact-form-section" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="contact-form-title">
              Contact
            </h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="first-name" className="contact-label">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="contact-input"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="last-name" className="contact-label">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="contact-input"
                  />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="contact-input"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="message" className="contact-label">
                  Write a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="contact-textarea"
                />
              </div>
              {status ? (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              ) : null}
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
