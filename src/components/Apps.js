import React from 'react';
import '../styles/Apps.css';

const appsData = [
  { name: "App One", description: "A description of App One", image: "/assets/app1.png" },
  { name: "App Two", description: "A description of App Two", image: "/assets/app2.png" }
];

function Apps() {
  return (
    <div className="apps">
      <h2>Our Apps</h2>
      <div className="app-list">
        {appsData.map((app, index) => (
          <div className="app-item" key={index}>
            <img src={app.image} alt={app.name} />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;
