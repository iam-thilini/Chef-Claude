import React, { useState, useEffect } from "react";
import logo from "../assets/chef-turbo-icon.png";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for the user's preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "enabled";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);

    // Save preference in localStorage
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Chef Turbo</h1>
      <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
        {darkMode ? "🌞" : "🌛"}
      </button>
    </header>
  );
}

export default Header;


//🌙
//☀️