import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

function Hero() {
  const [hasProfileImage, setHasProfileImage] = useState(true);

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

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Prefer images placed in `src/assets` (e.g. `src/assets/profile.jpg` or
  // generated variants like `profile-320.webp`). Falls back to `/profile.jpg` in `public`.
  const assetImages = import.meta.glob('../assets/*.{jpg,png,webp}', { eager: true, as: 'url' });

  // Collect discovered asset URLs and categorize by extension/size pattern
  const assets = Object.entries(assetImages).map(([path, url]) => ({ path, url }));
  // webp variants expected: profile-320.webp, profile-480.webp, profile-800.webp
  const webpVariants = assets
    .filter(a => /profile-?\d*\.webp$/.test(a.path))
    .map(a => ({ url: a.url, w: Number((a.path.match(/profile-(\d+)\.webp$/) || [])[1]) || 0 }))
    .sort((x, y) => x.w - y.w);
  const jpegFallback = assets.find(a => /profile\.(jpg|png)$/.test(a.path))?.url;

  const webpSrcSet = webpVariants.map(v => `${v.url} ${v.w}w`).join(', ');
  const fallbackSrc = jpegFallback ?? assets[0]?.url ?? '/profile.jpg';

  return (
    <motion.section
      className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.95fr] items-start">
          <motion.div className="space-y-10" variants={heroVariants}>
            <motion.div className="space-y-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <p className="text-xs uppercase tracking-[0.45em] text-[#64ffda]">LinkedIn portfolio profile</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Hi, I’m Ruchika.</h1>
              <p className="max-w-3xl text-xl font-semibold text-[#64ffda] sm:text-2xl">
                Data Engineer & DevOps practitioner building reliable cloud data systems.
              </p>
            </motion.div>
            <motion.div className="space-y-5 text-base leading-relaxed text-[#a8b2d1] sm:text-lg" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <p>
                I build scalable ETL pipelines, cloud data platforms, and automation workflows that keep data clean, trusted, and ready for analytics.
              </p>
              <p>
                I have delivered solutions for Trane Technologies and Mastercard using AWS, Spark, Python, and infrastructure-as-code.
              </p>
            </motion.div>

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
                +353 089 450 1957
              </div>
              <div className="rounded-3xl border border-[#233554] bg-[#0b1627] p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-2">Degree</p>
                Master’s (Intake 2025)
              </div>
            </div>

            <motion.div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={fadeUp}>
              <motion.button
                onClick={downloadCV}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-[#64ffda] px-6 py-3 text-sm font-medium text-[#64ffda] transition hover:bg-[#64ffda1a]"
              >
                Download CV
              </motion.button>
              <motion.a
                href="https://www.linkedin.com/in/ruchika-bhoite-761900213/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-[#64ffda] bg-[#0a192f] px-6 py-3 text-sm font-medium text-white transition hover:border-[#91ffe0]"
              >
                View LinkedIn
              </motion.a>
            </motion.div>

            <motion.div className="rounded-[2rem] border border-[#233554] bg-[#0b1627] p-5" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#64ffda] mb-4">Skills & tools</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {tools.map(({ name, Icon }) => (
                  <motion.div key={name} className="flex items-center gap-3 rounded-3xl border border-[#233554] bg-[#112240] px-4 py-3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Icon className="text-[#64ffda]" fontSize="small" />
                    <span className="text-sm font-medium text-[#a8b2d1]">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="rounded-3xl border border-[#233554] bg-[#0a192f] p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a8b2d1]">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#64ffda]">{skill.level}</span>
                  </div>
                  <div className="mt-3 text-right text-[10px] uppercase tracking-[0.3em] text-[#8892b0]">
                    {skill.percent}%
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#112240]">
                    <motion.div
                      className="h-full rounded-full bg-[#64ffda]"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{ delay: 0.35 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md rounded-[2rem] border border-[#233554] bg-gradient-to-br from-[#0e1b34] via-[#112240] to-[#0a1831] p-6 shadow-[0_25px_80px_rgba(100,255,218,0.16)] sm:p-8 flex flex-col justify-between min-h-[42rem] overflow-hidden"
            variants={slideInRight}
          >
            <motion.div
              className="pointer-events-none absolute -right-10 top-10 h-36 w-36 rounded-full bg-[#64ffda]/10 blur-3xl"
              animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -left-8 bottom-10 h-24 w-24 rounded-full border border-[#64ffda]/20"
              animate={{ rotate: [0, 45, 0] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            />
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={900}
              scale={1.02}
              transitionSpeed={400}
              glareEnable={false}
              className="mb-6 overflow-hidden rounded-[2rem] border border-[#233554] bg-[#0a192f] aspect-square min-h-[24rem]"
            >
              <motion.div className="h-full w-full" whileHover={{ scale: 1.01 }} transition={{ duration: 0.35, ease: "easeOut" }}>
                {hasProfileImage ? (
                  <picture aria-label="Profile picture">
                    {webpVariants.length > 0 && (
                      <source type="image/webp" srcSet={webpSrcSet} sizes="(max-width: 768px) 320px, 480px" />
                    )}
                    <img
                      src={fallbackSrc}
                      alt="Ruchika Bhoite"
                      loading="lazy"
                      onError={() => setHasProfileImage(false)}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                      style={{ display: 'block' }}
                    />
                  </picture>
                ) : (
                  <div className="flex h-72 items-center justify-center bg-[#0a192f]">
                    <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] bg-[#112240] text-5xl font-bold text-[#64ffda]">
                      RB
                    </div>
                  </div>
                )}
              </motion.div>
            </Tilt>
            <motion.p className="text-xs uppercase tracking-[0.4em] text-[#64ffda] mb-4" variants={fadeUp}>
              Profile overview
            </motion.p>
            <motion.h2 className="text-2xl font-semibold text-white sm:text-3xl mb-6" variants={fadeUp}>
              Build cloud-ready data systems with strong automation and observability.
            </motion.h2>
            <motion.div className="space-y-4 text-[#a8b2d1]" variants={fadeUp}>
              <p>
                I deliver data engineering solutions that help teams trust their data, reduce manual effort, and accelerate actionable insights.
              </p>
              <p>
                My work spans data pipelines, analytics-ready storage, CI/CD deployment, and monitoring for production systems.
              </p>
            </motion.div>

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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
