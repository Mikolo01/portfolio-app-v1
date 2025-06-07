import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Mikolo01 | DevOps & Cloud Security Engineer</h1>
        <p>Designing scalable, secure infrastructure and CI/CD pipelines.</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm a passionate engineer with hands-on experience in containerization,
          cloud security, and automating infrastructure using tools like Docker,
          Kubernetes, Terraform, and GitHub Actions.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio App</strong>: Microservices app with CI/CD pipelines and secure Docker images.</li>
          <li><strong>Security Scanner</strong>: Automated vulnerability scanning using Trivy in CI/CD workflows.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <p>Docker • Kubernetes • AWS • Terraform • GitHub Actions • Linux • DevSecOps</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: mikolo@example.com</p>
        <p>GitHub: <a href="https://github.com/Mikolo01" target="_blank" rel="noopener noreferrer">Mikolo01</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Mikolo01</p>
      </footer>
    </div>
  );
}

export default App;
