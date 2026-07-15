import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#020c1b" }}>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="work" className="scroll-mt-20">
        <Work />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="education" className="scroll-mt-20">
        <Education />
      </section>

      <footer className="py-12 border-t mt-16" style={{ borderColor: "#233554" }}>
        <div className="mx-auto w-full max-w-7xl px-4 text-center space-y-3 sm:px-6">
          <p className="text-sm text-[#a8b2d1]">
            Built and designed by <strong className="text-[#64ffda]">Ruchika Bhoite</strong>
          </p>
          <p className="text-sm text-[#a8b2d1]">
            Galway, Ireland · <a href="mailto:ruchika.bhoite01@gmail.com" className="hover:text-[#64ffda]">ruchika.bhoite01@gmail.com</a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#a8b2d1]">
            <a href="https://github.com/RuchikaBhoite31" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ruchika-bhoite-761900213/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
