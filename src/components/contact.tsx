import React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black text-white py-24 font-kanit">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in <span className="text-white/70">Touch</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto max-w-xl text-white/60 mb-10">
          Want to collaborate, ask a question, or just say hi? You can find me here.
        </motion.p>

        <motion.div variants={stagger} className="flex flex-wrap justify-center gap-5">
          <SocialIcon icon={<FaGithub size={20} />} href="https://github.com/Satwik-Dubey" />
          <SocialIcon icon={<SiGmail size={18} />} href="mailto:dubeysatwik0@gmail.com" />
          <SocialIcon icon={<FaXTwitter size={20} />} href="https://x.com/_satwikdubey" />
          <SocialIcon
            icon={<FaLinkedinIn size={20} />}
            href="https://www.linkedin.com/in/satwikdubey10/"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="h-12 w-12 flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
    >
      {icon}
    </motion.a>
  )
}