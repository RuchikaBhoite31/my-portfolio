import { useState } from "react";
import { motion } from "framer-motion";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Data Engineer",
      location: "Pune, India",
      period: "Dec 2024 – Aug 2025",
      highlights: [
        "Built scalable ETL pipelines for analytics and reporting workflows.",
        "Designed Spark and Glue jobs for data transformation and ingestion.",
        "Managed AWS S3 and Redshift storage, ensuring data quality and reliability.",
        "Automated workflows with AWS Lambda and monitored pipelines via CloudWatch.",
        "Delivered Tableau dashboards to support business insights.",
      ],
      stack: "Python, Spark, SQL, AWS Glue, S3, Redshift, Lambda, CloudWatch, Tableau",
    },
    {
      company: "Tata Consultancy Services",
      role: "DevOps Engineer",
      location: "Pune, India",
      period: "May 2024 – Dec 2024",
      highlights: [
        "Built CI/CD pipelines using Jenkins and GitLab for reliable deployments.",
        "Automated AWS infrastructure with Terraform as code.",
        "Containerized services with Docker for scalable environments.",
        "Implemented observability with Grafana and Kibana dashboards.",
        "Standardized environment provisioning using Ansible.",
      ],
      stack: "Jenkins, GitLab, AWS, Terraform, Docker, Ansible, Grafana, Kibana",
    },
    {
      company: "Sagveek Technologies",
      role: "Python Developer Intern",
      location: "Pune, India",
      period: "Internship",
      highlights: [
        "Developed Python backend modules and automation scripts.",
        "Integrated databases and APIs for data processing workflows.",
        "Maintained documentation and followed clean coding practices.",
      ],
      stack: "Python, SQL, APIs, Automation",
    },
    {
      company: "Oasis Infobyte",
      role: "Web Development & Design Intern",
      location: "Remote",
      period: "Internship",
      highlights: [
        "Built responsive web pages using HTML5, CSS3, and MySQL.",
        "Supported basic backend and CMS integration tasks.",
        "Improved UI usability and cross-browser compatibility.",
      ],
      stack: "HTML, CSS, MySQL, UI Design",
    },
  ];

  const activeExperience = experiences[activeIndex];

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
          <p className="text-xs uppercase tracking-[0.4em] text-[#64ffda] mb-3">/ experience</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Professional experience</h2>
          <p className="mt-4 max-w-3xl text-[#a8b2d1] sm:text-lg">
            My experience blends data engineering, DevOps, and product-focused internships with a focus on automation, cloud infrastructure, and reliable delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="space-y-3 rounded-[2rem] border border-[#233554] bg-[#0b1627] p-5 shadow-[0_20px_60px_rgba(2,12,27,0.25)]">
            {experiences.map((experience, index) => (
              <button
                key={experience.company + experience.role}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-3xl border px-5 py-5 text-left transition duration-200 ${
                  index === activeIndex
                    ? "border-[#64ffda] bg-[#112240] text-white shadow-[0_8px_30px_rgba(100,255,218,0.16)]"
                    : "border-transparent bg-[#0a192f] text-[#8892b0] hover:border-[#233554] hover:text-[#ccd6f6]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-[#64ffda]">{experience.company}</p>
                <p className="mt-3 text-lg font-semibold">{experience.role}</p>
                <p className="mt-2 text-sm text-[#8892b0]">{experience.period}</p>
              </button>
            ))}
          </div>

          <motion.div
            className="rounded-[2rem] border border-[#233554] bg-[#0b1627] p-6 shadow-[0_20px_60px_rgba(2,12,27,0.25)] sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-white">{activeExperience.role}</h3>
                <p className="mt-2 text-[#64ffda]">{activeExperience.company}</p>
                <p className="mt-2 text-sm text-[#8892b0]">{activeExperience.location}</p>
              </div>
              <span className="inline-flex rounded-full border border-[#233554] px-4 py-2 text-sm text-[#64ffda]">
                {activeExperience.period}
              </span>
            </div>

            <div className="mt-8 space-y-4 text-[#a8b2d1]">
              {activeExperience.highlights.map((highlight, highlightIndex) => (
                <p key={highlightIndex} className="flex gap-3 leading-relaxed">
                  <span className="text-[#64ffda]">/</span>
                  {highlight}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[#233554] bg-[#101e34] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda]">Tech stack</p>
              <p className="mt-3 text-[#a8b2d1]">{activeExperience.stack}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;
