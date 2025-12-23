import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

type Project = {
  id: string
  title: string
  description: string
  image: string
  liveLink: string
  githubLink?: string
  demoLink?: string 
}

const projects: Project[] = [
  {
    id: "01",
    title: "VoteTheBeat — Let the crowd decide the music.",
    description:
      "VoteTheBeat is a real-time collaborative music voting platform where users create shared sessions, add songs, and vote live. Powered by WebSockets, it enables a fair and interactive way for groups to decide what plays next.",
    image: "/votethebeat.jpg",
    liveLink: "https://vote-the-beat-app.vercel.app/",
    githubLink: "https://github.com/Satwik-Dubey/VoteTheBeat",
    demoLink: "https://youtu.be/nXKknfs2YVc",
  },
  {
    id: "02",
    title: "NextGig — AI-powered tools to build careers, not just resumes.",
    description:
      "NextGig is an AI-powered career development platform that helps users build resumes, generate cover letters, assess skills, and explore industry insights. It focuses on personalization, automation, and real-world career readiness.",
    image: "/nextgig.jpg",
    liveLink: "https://nextgigg.vercel.app/",
    githubLink: "https://github.com/Satwik-Dubey/nextgig",
  },
  {
    id: "03",
    title: "Schedulo — Plan smarter. Stay consistent. Get more done.",
    description:
      "Schedulo simplifies daily planning by combining smart scheduling, reminders, and productivity analytics in one platform. It helps users stay organized, focused, and consistent with their goals.",
    image: "/schedulo.jpg",
    liveLink: "https://schedulo-pi.vercel.app/",
    githubLink: "https://github.com/Satwik-Dubey/Schedulo",
  },
  {
    id: "04",
    title: "Hostel Dekho — Find your next stay near campus.",
    description:
      "Hostel Dekho is a student-focused accommodation platform that enables users to discover, contact, and book hostels and PGs near their college. It provides a seamless end-to-end experience from search to booking.",
    image: "/hosteldekho.jpg",
    liveLink: "https://drive.google.com/file/d/127QHASuEZUnMFISua5LYyQj5jONyRrOd/view?usp=sharing",
    githubLink: "https://github.com/Satwik-Dubey/hosteldekho/tree/main",
  },
  {
    id: "05",
    title: "Voice Bridge — Instant translation across text, voice, and vision.",
    description:
      "Voice Bridge is a real-time multilingual translation platform built with Groq AI, supporting text, audio, and image-based translation. It is designed for instant communication without app switching or installation.",
    image: "/VoiceBridge.jpg",
    liveLink: "https://youtu.be/W5h3b5eoeSU?si=-QVBgrqkH5myAMwI",
    githubLink: "https://github.com/Satwik-Dubey/MultilingualCommunicator",
  },
  {
    id: "06",
    title: "SmartSnip — Read less. Understand more.",
    description:
      "SmartSnip is a lightweight Chrome extension that uses AI to generate context-aware summaries of web pages. It supports multiple summary formats with a privacy-first, minimal UI approach.",
    image: "/smartsnip.jpg",
    liveLink: "https://github.com/Satwik-Dubey/SmartSnip",
    githubLink: "https://github.com/Satwik-Dubey/SmartSnip",
  },
]

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 80 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
//   },
// }

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-black text-white py-24 font-kanit">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <motion.h2
        //   initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-20 text-center text-3xl md:text-4xl font-semibold"
        >
          <span className="font-extrabold">Projects</span>
        </motion.h2>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
            >
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageReveal}
                className="relative w-full max-w-[520px] aspect-[18/10] rounded-2xl overflow-hidden cursor-pointer group"
              >
  
              </motion.a>

              <div className={`flex flex-col ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                <span className="mb-4 text-4xl font-bold text-white/70">{project.id}</span>
                <h3 className="mb-4 text-2xl md:text-3xl font-semibold flex items-center gap-2">
                  {project.title}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block align-middle ml-2"
                      aria-label="Demo"
                    >
                      <img src="{youtube.png}"/>
                    </a>
                  )}
                </h3>
                <p className="mb-6 max-w-md text-sm md:text-base text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>

                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition"
                    >
                      GitHub
                      <FaGithub size={16} />
                    </a>
                  ) : null}

                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-m font-medium text-neutral-400 hover:text-white transition"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}