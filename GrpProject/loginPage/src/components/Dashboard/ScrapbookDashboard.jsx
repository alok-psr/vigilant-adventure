import React, { useState } from "react";
import "./ScrapbookDashboard.css";
import "./styles.css";

const ScrapbookDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("gallery");

  // Example scrapbook entries
  //   const sampleEntries = [
  //     { title: "Trip to the Mountains", image: "https://via.placeholder.com/200", description: "A beautiful memory from the hills." },
  //     { title: "Beach Vacation", image: "https://via.placeholder.com/200", description: "Golden sands and blue waves." },
  //     { title: "Birthday Celebration", image: "https://via.placeholder.com/200", description: "A special day with family." }
  //   ];

  const sampleEntries = [
    {
      title: "Trip to the Mountains",
      image: "mountain.jpeg",
      description: "A beautiful memory from the hills.",
    },
    {
      title: "Beach Vacation",
      image: "beach.jpeg",
      description: "Golden sands and blue waves.",
    },
    {
      title: "Birthday Celebration",
      image: "birthday.jpeg",
      description: "A special day with family.",
    },
  ];

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Scrapbook</h2>
        <ul>
          <li>
            <button onClick={() => setActiveTab("gallery")}>Gallery</button>
          </li>
          <li>
            <button onClick={() => setActiveTab("add")}>Add Entry</button>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h2>Scrapbook Gallery</h2>
        <div className="scrapbook-grid">
          {sampleEntries.map((entry, index) => (
            <div className="scrapbook-card" key={index}>
              <img src={entry.image} alt={entry.title} />
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ScrapbookDashboard;
