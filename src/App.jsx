import "./style.css";
// import React from "react";
// import { Routes, Route } from "react-router";

import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Skills } from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";



export { Header, Hero, About, Skills, };

export function App() {
  // Hozircha faqat oddiy layout
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}
