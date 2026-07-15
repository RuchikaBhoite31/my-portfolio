import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ruchika_Bhoite_Resume.pdf";
    link.download = "Ruchika_Bhoite_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "Python", level: "Expert", percent: 95 },
    { name: "SQL", level: "Advanced", percent: 90 },
    { name: "Apache Spark", level: "Advanced", percent: 88 },
    { name: "AWS Glue", level: "Advanced", percent: 85 },
    { name: "S3", level: "Advanced", percent: 90 },
    { name: "Redshift", level: "Advanced", percent: 86 },
    { name: "Terraform", level: "Intermediate", percent: 80 },
    { name: "Docker", level: "Intermediate", percent: 82 },
    { name: "Jenkins", level: "Intermediate", percent: 78 },
    { name: "Tableau", level: "Intermediate", percent: 76 },
  ];

  const tools = [
    { name: "AWS", Icon: CloudQueueRoundedIcon },
    { name: "Spark", Icon: DataObjectRoundedIcon },
    { name: "Terraform", Icon: StorageRoundedIcon },
    { name: "Docker", Icon: CodeRoundedIcon },
    { name: "Python", Icon: BuildRoundedIcon },
    { name: "CI/CD", Icon: AutoFixHighRoundedIcon },
  ];

  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.4fr_0.85fr] items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-[#64ffda]">LinkedIn portfolio profile</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">hi, I’m Ruchika.</h1>
              <p className="max-w-3xl text-xl font-semibold text-[#64ffda] sm:text-2xl">
                Data Engineer & DevOps practitioner building trusted cloud data systems.
              </p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-[#a8b2d1] sm:text-lg">
              <p>
                I build scalable ETL pipelines, cloud data platforms, and automation workflows for analytics-driven organizations. My work combines AWS, Spark, Python, and DevOps practices so data stays reliable from ingestion through reporting.
              </p>
              <p>
                I’ve supported Trane Technologies and Mastercard through TCS, delivering pipeline automation, infrastructure as code, monitoring, and reporting solutions. I also have experience in backend development, web design, and AI-powered applications.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-[#ccd6f6]">
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ruchika-bhoite-761900213/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] block">
                  ruchika-bhoite-761900213
                </a>
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">Email</p>
                <a href="mailto:ruchika.bhoite01@gmail.com" className="hover:text-[#64ffda] block">
                  ruchika.bhoite01@gmail.com
                </a>
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">Location</p>
                Galway, Ireland
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">GitHub</p>
                <a href="https://github.com/RuchikaBhoite31" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] block">
                  RuchikaBhoite31
                </a>
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">Phone</p>
                +353089
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">Degree</p>
                Master’s (Intake 2025)
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={downloadCV}
                className="rounded-full border border-[#64ffda] px-6 py-3 text-sm font-medium text-[#64ffda] transition hover:bg-[#64ffda1a]"
              >
                Download CV
              </button>
              <a
                href="https://www.linkedin.com/in/ruchika-bhoite-761900213/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#64ffda] bg-[#0a192f] px-6 py-3 text-sm font-medium text-white transition hover:border-[#91ffe0]"
              >
                View LinkedIn
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#233554] bg-[#0b1627] p-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-4">Skills & tools</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {tools.map(({ name, Icon }) => (
                  <div key={name} className="flex items-center gap-3 rounded-3xl border border-[#233554] bg-[#112240] px-4 py-3">
                    <Icon className="text-[#64ffda]" fontSize="small" />
                    <span className="text-sm font-medium text-[#a8b2d1]">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div key={skill.name} className="rounded-3xl border border-[#233554] bg-[#0a192f] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a8b2d1]">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda]">{skill.level}</span>
                  </div>
                  <div className="mt-3 text-right text-[10px] uppercase tracking-[0.3em] text-[#8892b0]">
                    {skill.percent}%
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#112240]">
                    <div
                      className="h-full rounded-full bg-[#64ffda] progress-fill"
                      style={{ width: `${skill.percent}%`, animationDelay: `${index * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-[#233554] bg-gradient-to-br from-[#0e1b34] via-[#112240] to-[#0a1831] p-8 shadow-[0_25px_80px_rgba(100,255,218,0.16)] sm:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[#64ffda] mb-4">Profile overview</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl mb-6">
              Build cloud-ready data systems with strong automation and observability.
            </h2>
            <div className="space-y-4 text-[#a8b2d1]">
              <p>
                I deliver data engineering solutions that help teams trust their data, reduce manual effort, and accelerate actionable insights.
              </p>
              <p>
                My work spans data pipelines, analytics-ready storage, CI/CD deployment, and monitoring for production systems.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-[#233554] bg-[#0a192f] p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda] mb-2">Focus</p>
                Scalable ETL, cloud automation, and analytics workflows.
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0a192f] p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda] mb-2">Experience</p>
                TCS data engineering, DevOps, and internship-based product development.
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0a192f] p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda] mb-2">Tech stack</p>
                Python, Spark, AWS, Terraform, Docker, Jenkins, SQL, Tableau.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
