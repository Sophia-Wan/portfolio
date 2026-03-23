import { useState } from "react";
import { Header } from "../assets/components/navbar/navbar.jsx";
import { Footer } from "../assets/components/footer/footer.jsx";
import { InteractiveBackground } from "../assets/components/background/InteractiveBackground.jsx";
import "./ContactPage.css";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactPage() {
  const [feedback, setFeedback] = useState({ kind: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!email || !message) {
      setFeedback({
        kind: "error",
        message: "Please enter your email and a message.",
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFeedback({
        kind: "error",
        message:
          "Sorry, This is still under construction. Feel free to click the mail icon to the left to send a message!",
      });
      return;
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();

    setIsSubmitting(true);
    setFeedback({ kind: "", message: "" });

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: fullName
            ? `Portfolio contact from ${fullName}`
            : "New message from your portfolio",
          name: fullName || email,
          email,
          message,
          /* Web3Forms sends the notification to the email tied to your access key */
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFeedback({
          kind: "success",
          message: "Thanks — your message was sent. I’ll get back to you soon.",
        });
        form.reset();
      } else {
        setFeedback({
          kind: "error",
          message:
            typeof data.message === "string"
              ? data.message
              : "Something went wrong. Please try again or email me directly.",
        });
      }
    } catch {
      setFeedback({
        kind: "error",
        message: "Network error. Check your connection or try emailing me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                href="mailto:wysophiawan@gmail.com"
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
                  Email <span className="contact-label-required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="contact-input"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="message" className="contact-label">
                  Write a message <span className="contact-label-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="contact-textarea"
                />
              </div>
              {feedback.message ? (
                <p
                  className={`contact-form-status${
                    feedback.kind === "success"
                      ? " contact-form-status--success"
                      : feedback.kind === "error"
                        ? " contact-form-status--error"
                        : ""
                  }`}
                  role="status"
                >
                  {feedback.message}
                </p>
              ) : null}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
