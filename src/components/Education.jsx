import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      school: "University of Galway",
      location: "Galway, Ireland",
      degree: "Master's Degree",
      period: "Fall Intake 2025",
      detail: "Commencing advanced study in data and analytics.",
    },
    {
      school: "Savitribai Phule Pune University",
      location: "Pune, India",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "May 2023",
      detail: "CGPA: 9.14 (Distinction) · Honors in AI & Machine Learning.",
    },
    {
      school: "AISSMS Polytechnic",
      location: "Pune, India",
      degree: "Diploma in Computer Engineering",
      period: "May 2020",
      detail: "CGPA: 86.86 (Distinction).",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#64ffda] mb-3">/ education</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Academic background</h2>
          <p className="mt-4 max-w-3xl text-[#a8b2d1] sm:text-lg">
            A strong technical foundation in computer engineering, AI, and data systems with international study experience.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-[2rem] border border-[#233554] bg-[#0b1627] p-6 shadow-[0_20px_50px_rgba(2,12,27,0.24)] sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#64ffda] mb-4">{edu.period}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{edu.school}</h3>
              <p className="text-sm text-[#a8b2d1] mb-4">{edu.degree}</p>
              <p className="text-sm text-[#a8b2d1] mb-4">{edu.location}</p>
              <p className="text-sm leading-relaxed text-[#a8b2d1] border-t border-[#233554] pt-4">
                {edu.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
