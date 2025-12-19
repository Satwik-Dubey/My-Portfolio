"use client";
import { useEffect, useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export function FloatingNavDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} className={scrolled ? "nav--transparent" : "nav--solid"} />
    </div>
  );
}

export default FloatingNavDemo;