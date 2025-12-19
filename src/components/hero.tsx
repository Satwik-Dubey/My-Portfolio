import React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { Clipboard, File } from "lucide-react"
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const imageFade: Variants = {
  hidden: { opacity: 0, scale: 0.96, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{ fontFamily: "Kanit, sans-serif" }}
      className="relative w-full bg-white text-black pb-20 overflow-hidden"
    >
      {/* background grid (behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-black/[0.08]"
      />

      {/* ensure everything is above the grid */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-10 md:py-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="order-2 md:order-1">
            <motion.h1 variants={fadeUp} className="text-xl md:text-3xl font-semibold mb-2">
              Hello I&apos;m <span className="font-extrabold">Satwik Dubey.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-4">
              <div className="text-5xl md:text-7xl font-extrabold leading-[0.95]">
                Fullstack
              </div>

              <div
                className="text-5xl md:text-7xl font-extrabold leading-[0.95] text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Developer
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm md:text-base text-gray-600 leading-relaxed font-kanit mb-6"
            >
              Undergraduate AI & ML student passionate about building impactful software products. I enjoy working on ideas that solve real problems and am open to collaboration and learning through hands-on projects.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-wrap gap-3">
                <motion.div variants={fadeUp}>
                 <SocialIcon href="https://x.com/_satwikdubey" icon={<FaXTwitter size={18} />} />
                </motion.div>
              <motion.div variants={fadeUp}>
                <SocialIcon href="https://github.com/Satwik-Dubey" icon={<FaGithub size={18} />} />
              </motion.div>

              <motion.div variants={fadeUp}>
                <SocialIcon href="mailto:dubeysatwik0@gmail.com" icon={<SiGmail size={18} />} />
              </motion.div>

              <motion.div variants={fadeUp}>
                <SocialIcon
                  href="https://www.linkedin.com/in/satwikdubey10/"
                  icon={<FaLinkedinIn size={18} />}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SocialIcon href="https://drive.google.com/file/d/1aiqtRoHQSIJ9_1TzA2Yj-F91lf5vYDw_/view?usp=sharing" icon={<File size={18} />} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={imageFade}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[460px] aspect-square">
              <img
                src="/pic.png"
                alt="Profile Illustration"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-md border-2 border-black
        bg-white text-black
        transition
        hover:bg-black hover:text-white
      "
    >
      {icon}
    </a>
  )
}