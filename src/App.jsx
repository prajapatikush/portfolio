import React, { useMemo, useState } from "react";
import { Mail, Phone, Linkedin, Download, ExternalLink } from "lucide-react";
import profileImg from "./assets/profile.jpg";
import resumeUrl from "./assets/resume.pdf";

// === DATA ===
const profile = {
  name: "Kushkumar Prajapati",
  title: "Bridging Mechanics, Automation & Innovation",
  about:
    "Electromechanical Engineering Technologist specializing in PLC/HMI programming, robotics integration, and data-driven manufacturing. Hands-on with Siemens & Allen-Bradley PLCs, KUKA robots, CMM metrology, and continuous improvement.",
  contact: {
    email: "prajapatikush33@gmail.com",
    phone: "+1 (437) 559-0704",
    linkedin: "https://www.linkedin.com/in/kushkprajapati/",
  },
  majorProjects: [
    {
      name: "Automated Weight Sorting System",
      org: "Seneca Polytechnic",
      when: "2024",
      description:
        "Servo-based weight rejection with PLC/HMI, load-cell feedback, and Node-RED dashboard for live monitoring.",
      skills: ["PLC", "HMI", "Servo Motion", "Load Cells", "Node-RED"],
      logo: "",
    },
    {
      name: "KUKA KR3 R540 Digital Twin (Welding Path)",
      org: "Independent",
      when: "2024",
      description:
        "Programmed welding-like paths with approach/retreat logic and safe zones in NX MCD + WorkVisual.",
      skills: ["KUKA", "Path Planning", "Digital Twin", "Safety Zones"],
      logo: "",
    },
    {
      name: "Fixture Redesign for Shaft Flange Drilling",
      org: "INNIO Waukesha",
      when: "2023–2025",
      description:
        "Quick-change fixture enabling 6-cyl/12-cyl swap without hardware change; improved safety and reduced setup time.",
      skills: ["Fixture Design", "Lean", "GD&T", "CNC"],
      logo: "",
    },
  ],
  projects: [
    {
      name: "Automated Weight Sorting System",
      org: "Seneca Polytechnic",
      when: "Jan–Apr 2024",
      description:
        "Designed a closed-loop sorting line using Click Plus PLC, HMI, and load-cell sensors; built Node-RED dashboard for KPIs.",
      skills: ["PLC", "HMI", "Servo", "Load Cells", "EPLAN", "Node-RED"],
      logo: "",
    },
    {
      name: "KUKA KR3 R540 Digital Twin (Welding Path)",
      org: "Independent",
      when: "May–Aug 2024",
      description:
        "Simulated weld bead paths with 3D pen end-effector; implemented safe approach, interrupts, and tool calibration.",
      skills: ["KUKA", "WorkVisual", "NX MCD", "Path Planning", "Safety"],
      logo: "",
    },
    {
      name: "Fixture Redesign for Shaft Flange Drilling",
      org: "INNIO Waukesha",
      when: "Sep 2023–Apr 2025",
      description:
        "Redesigned fixture for variant changeovers; reduced setup time and eliminated manual swaps while improving ergonomics.",
      skills: ["Fixture Design", "Lean", "GD&T", "CNC", "SPC"],
      logo: "",
    },
  ]
};

// Small reusable pieces
const Logo = ({ src, name }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} logo`}
        className="logo-img" // we don't style this specifically now
      />
    );
  }
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((x) => x[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [name]
  );
  return <div className="logo-circle">{initials}</div>;
};

const SkillChip = ({ children }) => (
  <span className="skill-chip">{children}</span>
);

// Header component
const Header = ({ onGoProjects, onGoResume }) => (
  <header className="app-header">
    <div className="app-header-inner">
      <div className="app-header-left">
        <div className="logo-badge" />
        <div className="app-header-title">Portfolio</div>
      </div>
      <div className="header-buttons">
        <button className="header-btn" onClick={onGoProjects}>
          Projects
        </button>
        <button className="header-btn primary" onClick={onGoResume}>
          My Resume
        </button>
      </div>
    </div>
  </header>
);

// Page 1 – Home
const HomePage = ({ navigate }) => (
  <>
    <Header
      onGoProjects={() => navigate("projects")}
      onGoResume={() => navigate("resume")}
    />

    {/* Hero */}
    <section className="page-section">
	  <div className="card hero-card">
		{/* Left Text Block */}
		<div className="hero-text">
		  <div className="hero-tagline">Electromechanical | Robotics | PLC</div>
		  <h1 className="hero-name">{profile.name}</h1>
		  <p className="hero-subtitle">{profile.title}</p>
		</div>

		{/* Right Photo Block */}
		<div className="hero-photo-wrap">
		  <img
			src={profileImg}
			alt="Kush Prajapati"
			className="hero-photo"
		  />
		</div>
	  </div>
	</section>


    {/* About + major projects */}
    <section className="twocol">
      {/* About */}
      <div className="card">
        <h2 className="section-title">About</h2>
        <p>{profile.about}</p>

        <div className="about-actions">
          <a
            className="chip-link"
            href={`mailto:${profile.contact.email}`}
          >
            <Mail size={14} /> Email
          </a>
          <a
            className="chip-link"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} /> LinkedIn
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Major projects preview */}
      <div className="card">
        <div className="project-preview">
          <h2 className="section-title">Major Projects</h2>
          <button
            className="header-btn"
            onClick={() => navigate("projects")}
            style={{ paddingInline: 12, fontSize: "0.78rem" }}
          >
            View all
          </button>
        </div>

        <div className="project-list-preview">
          {profile.majorProjects.map((p) => (
            <div key={p.name} className="project-preview-card">
              <Logo name={p.name} src={p.logo} />
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 550 }}>
                  {p.name}
                </div>
                <div className="meta-text">
                  • {p.org} • {p.when}
                </div>
                <p
                  style={{
                    marginTop: 4,
                    fontSize: "0.82rem",
                    color: "#4b5563",
                  }}
                >
                  {p.description}
                </p>
                <div className="skill-row">
                  {p.skills.map((s) => (
                    <SkillChip key={s}>{s}</SkillChip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="page-section">
      <div className="card">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <Mail size={14} />
            <a href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </div>
          <div className="contact-item">
            <Phone size={14} />
            <span>{profile.contact.phone}</span>
          </div>
          <div className="contact-item">
            <Linkedin size={14} />
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

// Page 2 – Projects
const ProjectsPage = ({ navigate }) => (
  <>
    <Header
      onGoProjects={() => navigate("projects")}
      onGoResume={() => navigate("resume")}
    />

    <section className="page-section">
      <h1 className="hero-name" style={{ fontSize: "1.6rem" }}>
        Projects
      </h1>
      <p className="projects-intro">
        Selected work across robotics, controls, and manufacturing.
      </p>

      <div className="projects-stack">
        {profile.projects.map((p) => (
          <article key={p.name} className="project-row">
            <Logo name={p.name} src={p.logo} />
            <div>
              <div className="project-row-title">{p.name}</div>
              <div className="meta-text">
                • {p.org} • {p.when}
              </div>
              <p className="project-row-desc">{p.description}</p>
              <div className="skill-row">
                {p.skills.map((s) => (
                  <SkillChip key={s}>{s}</SkillChip>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="back-link-btn" onClick={() => navigate("home")}>
        ← Back to Home
      </button>
    </section>
  </>
);

// Page 3 – Resume
const ResumePage = ({ navigate }) => (
  <>
    <Header
      onGoProjects={() => navigate("projects")}
      onGoResume={() => navigate("resume")}
    />

    <section className="page-section">
      <h1 className="hero-name" style={{ fontSize: "1.6rem" }}>
        Resume
      </h1>
      <p className="projects-intro">View or download the latest PDF resume.</p>

      <div className="resume-frame-wrapper">
        {resumeUrl ? (
          <iframe
            title="Resume PDF"
            src={resumeUrl}
            className="resume-frame"
          />
        ) : (
          <div style={{ padding: 24, fontSize: "0.85rem" }}>
            Add your PDF URL to <code>resumeUrl</code>.
          </div>
        )}
      </div>

      {profile.resumeUrl && (
        <a href={resumeUrl} download>
          <button className="download-btn">
            <Download size={14} />
            Download Resume
          </button>
        </a>
      )}

      <button className="back-link-btn" onClick={() => navigate("home")}>
        ← Back to Home
      </button>
    </section>
  </>
);

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-root">
      {page === "home" && <HomePage navigate={setPage} />}
      {page === "projects" && <ProjectsPage navigate={setPage} />}
      {page === "resume" && <ResumePage navigate={setPage} />}

      <footer className="app-footer">
        <div className="footer-inner">
          <span style={{ fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} {profile.name}. Portfolio.
          </span>
          <div className="footer-links">
            <a href={`mailto:${profile.contact.email}`}>Email</a>
            <span>•</span>
            <span>{profile.contact.phone}</span>
            <span>•</span>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
