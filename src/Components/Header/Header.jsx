// src/Components/Header/Header.jsx
import { useState, useEffect } from "react";

export function Header() {
  // default theme null, keyin useEffect bilan aniqlaymiz
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Foydalanuvchi qurilmasining color scheme ni tekshirish
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    if (prefersDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">KJ</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              🌓
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
