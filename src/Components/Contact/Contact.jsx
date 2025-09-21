// Components/Contact/Contact.jsx
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Let's Work Together</h2>
        <div className="contact-content fade-in-up">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "2rem",
              }}
            >
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <strong>Email</strong>
                <br />
                <a
                  href="mailto:qoldoshevjavohir01@gmail.com"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  qoldoshevjavohir01@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <strong>Phone</strong>
                <br />
                <a
                  href="tel:+998771271235"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  +998 77 127 12 35
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <strong>LinkedIn</strong>
                <br />
                <a
                  href="https://www.linkedin.com/in/javohir-qo-ldoshev-100465364"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  www.linkedin.com/in/javohir-qo-ldoshev
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <strong>GitHub</strong>
                <br />
                <a
                  href="https://github.com/sunako13"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  github.com/sunako13
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
