import { useState, useEffect } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#112240] bg-[#020c1b]/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="text-base font-semibold text-white sm:text-lg">Ruchika Bhoite</div>
          <p className="hidden text-xs text-[#8892b0] md:block">Data Engineer • LinkedIn portfolio</p>
        </div>

        <div className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="rounded-full px-4 py-2 text-xs font-medium transition duration-200 sm:text-sm"
              style={{
                color: activeSection === item.id ? "#64ffda" : "#ccd6f6",
                backgroundColor: activeSection === item.id ? "rgba(100,255,218,0.12)" : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ruchika-bhoite-761900213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] transition hover:text-[#64ffda]"
          >
            <LinkedInIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://github.com/RuchikaBhoite31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] transition hover:text-[#64ffda]"
          >
            <GitHubIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="mailto:ruchika.bhoite01@gmail.com"
            className="text-[#8892b0] transition hover:text-[#64ffda]"
          >
            <EmailRoundedIcon style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
