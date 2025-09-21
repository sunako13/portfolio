import React from "react";


// src/Components/Hero/Hero.jsx
export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Chap tarafdagi matn */}
          <div className="hero-text">
            <h1>Kuldashev Javohir</h1>
            <p>
              Full-Stack Web Developer specializing in modern JavaScript
              frameworks and cloud technologies. I create beautiful, responsive
              web applications that solve real-world problems.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          {/* O‘ng tarafdagi kod animatsiya */}
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-lines">
                <div className="code-line">
                  <span className="keyword">const</span>{" "}
                  <span className="function">developer</span> = {"{"}
                </div>
                <div className="code-line">
                  name: <span className="string">'Kuldashev Javohir'</span>,
                </div>
                <div className="code-line">
                  skills: [
                  <span className="string">'React'</span>,{" "}
                  <span className="string">'Node.js'</span>,{" "}
                  <span className="string">'MongoDB'</span>],
                </div>
                <div className="code-line">
                  <span className="function">createAwesome</span>: () ={" "}
                  <span className="string">'✨'</span>
                </div>
                <div className="code-line">{"};"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
