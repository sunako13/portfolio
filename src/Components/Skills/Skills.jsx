export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title fade-in-up">Skills &amp; Technologies</h2>
        <div className="skills-grid fade-in-up">
          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-item">
              <span>React.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>TypeScript</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Next.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>CSS/SASS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-item">
              <span>Node.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Express.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Python</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>GraphQL</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="skill-category">
            <h3>Database &amp; Cloud</h3>
            <div className="skill-item">
              <span>MongoDB</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>PostgreSQL</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>AWS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Docker</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
