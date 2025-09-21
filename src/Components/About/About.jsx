// src/Components/About/About.jsx
// import React from "react";

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        <div className="about-content fade-in-up">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Kuldashev Javohir"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Javohir, a passionate full-stack web developer. I
              specialize in JavaScript technologies and love building
              applications that make a difference.
            </p>
            <p>
              My journey started with curiosity about how websites work, and it
              has evolved into a career where I get to solve complex problems
              and create beautiful user experiences every day. I'm constantly
              learning new technologies and staying updated with industry trends.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new coffee shops,
              hiking in nature, or contributing to open-source projects. I
              believe in writing clean, maintainable code and creating inclusive
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
