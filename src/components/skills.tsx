import React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ShimmerButton } from "../components/ui/shimmer-button"

const categories: {
  title: string
  items: { slug: string; label: string }[]
}[] = [
  {
    title: "Frontend",
    items: [
      { slug: "html5", label: "HTML" },
      { slug: "css3", label: "CSS" },
      { slug: "tailwind", label: "Tailwind" },
      { slug: "javascript", label: "JavaScript" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "react", label: "React" },
      { slug: "nextdotjs", label: "Next.js" },
    ],
  },
  {
    title: "Backend",
    items: [
      { slug: "java", label: "Java" },
      { slug: "springboot", label: "SpringBoot" },
      { slug: "nodedotjs", label: "Node.js" },
      { slug: "express", label: "Express" },
      { slug: "prisma", label: "Prisma" },
    ],
  },
  {
    title: "Databases",
    items: [
      { slug: "postgresql", label: "PostgreSQL" },
      { slug: "mongodb", label: "MongoDb" },
      { slug: "firebase", label: "Firebase" },
      { slug: "supabase", label: "Supabase" },
    ],
  },
  {
    title: "Tools",
    items: [
      { slug: "git", label: "Git" },
      { slug: "github", label: "GitHub" },
      { slug: "androidstudio", label: "Android Studio" },
      { slug: "figma", label: "Figma" },

    ],
  },
  {
    title: "DevOps",
    items: [
      { slug: "docker", label: "Docker" },
      { slug: "nginx", label: "Nginx" },
      { slug: "amazonaws", label: "AWS" },

    ],
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const block: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
}

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white text-black py-16 font-kanit">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-10 text-center text-3xl md:text-4xl font-semibold"
        >
          Skill<span className="font-extrabold">s</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={block} className="w-full">
              <h3 className="mb-5 text-xl font-semibold">{cat.title}</h3>

              <div className="flex flex-wrap gap-3">
                {cat.items.map((s) => (
                  <ShimmerButton key={s.slug} className="shadow-2xl px-4 py-2">
                    <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-nowrap text-white lg:text-base">
                      {s.label}
                    </span>
                  </ShimmerButton>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}