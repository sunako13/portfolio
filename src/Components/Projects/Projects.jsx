export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in-up">Featured Projects</h2>
        <div className="projects-grid fade-in-up">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-featured e-commerce platform with real-time inventory
                management, payment processing, and admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Stripe</span>
              </div>
              <div className="project-links">
                <a href="https://friends-web-one.vercel.app" target="_blank">
                  Live Demo →
                </a>
                <a href="#" target="_blank">
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>
                A collaborative task management application with real-time
                updates, team workspaces, and project analytics.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Socket.io</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank">
                  Live Demo →
                </a>
                <a href="#" target="_blank">
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-content">
              <h3>Weather Dashboard</h3>
              <p>
                A responsive weather dashboard with location-based forecasts,
                interactive maps, and weather alerts.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Chart.js</span>
                <span className="tech-tag">API Integration</span>
                <span className="tech-tag">PWA</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank">
                  Live Demo →
                </a>
                <a href="#" target="_blank">
                  GitHub →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
