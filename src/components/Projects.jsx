import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "IntellectSoft",
      subtitle: "Assistive AI for Accessibility",
      description:
        "Designed an AI-based assistive system to improve accessibility for physically disabled users using voice recognition and gesture controls.",
      tech: "Python, AI/ML frameworks, Voice Recognition, Gesture Control",
      github: "https://github.com/RuchikaBhoite31",
    },
    {
      title: "RAG-Based Chatbot",
      subtitle: "Galway Tourism Assistant",
      description:
        "Built a retrieval-augmented generation chatbot for Galway tourism, focusing on accurate document retrieval and conversational responses.",
      tech: "Python, RAG, JSON, CSV, LLMs",
      github: "https://github.com/RuchikaBhoite31",
    },
    {
      title: "Medical Store Automation",
      subtitle: "Desktop Inventory System",
      description:
        "Developed a Java desktop app for medical store automation, including inventory management, billing, and order tracking.",
      tech: "Java, MySQL, JDBC, Swing",
      github: "https://github.com/RuchikaBhoite31",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#64ffda] mb-3">/ projects</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected projects</h2>
          <p className="mt-4 max-w-3xl text-[#a8b2d1] text-sm sm:text-base">
            AI, automation, and application development work focused on accessibility, tourism intelligence, and operational efficiency.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-[2rem] border border-[#233554] bg-[#0b1627] p-6 transition duration-300 hover:border-[#64ffda] hover:bg-[#112240]"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-3">project</p>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-[#a8b2d1] mb-4">{project.subtitle}</p>
              <p className="text-sm leading-relaxed text-[#a8b2d1] mb-5">{project.description}</p>
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-1">Tech stack</p>
                <p className="text-xs text-[#a8b2d1]">{project.tech}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#64ffda] transition hover:text-white"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
