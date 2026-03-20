import { HiMail } from "react-icons/hi";
import {
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiOpenjdk,
  SiCplusplus,
  SiPython,
  SiGit,
  SiVercel,
  SiExpress,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

export const ICON_MAP: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Java: SiOpenjdk,
  "C++": SiCplusplus,
  Python: SiPython,
  Docker: SiDocker,
  Git: SiGit,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Vercel: SiVercel,
  Express: SiExpress,
};

export const SKILLS = [
  { name: "TypeScript", delay: 0 },
  { name: "React", delay: 50 },
  { name: "Tailwind CSS", delay: 100 },
  { name: "Java", delay: 150 },
  { name: "C++", delay: 200 },
  { name: "Python", delay: 250 },
  { name: "Docker", delay: 300 },
  { name: "Git", delay: 350 },
];

export const CONTACTS = [
  {
    icon: HiMail,
    label: "Email",
    value: "mikepiot479@gmail.com",
    href: "mailto:mikepiot479@gmail.com",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: "github.com/m1k36",
    href: "https://github.com/m1k36",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/mike-piot",
    href: "https://www.linkedin.com/in/mike-piot-15a917336/",
  },
];

