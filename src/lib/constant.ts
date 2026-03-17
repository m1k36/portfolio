import { HiMail } from "react-icons/hi";
import {
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiStripe,
  SiDocker,
  SiRedis,
  SiStorybook,
  SiOpenjdk,
  SiCplusplus,
  SiPython,
  SiGit,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

export const ICON_MAP: Record<string, IconType> = {
  // skills
  TypeScript: SiTypescript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Java: SiOpenjdk,
  "C++": SiCplusplus,
  Python: SiPython,
  Docker: SiDocker,
  Git: SiGit,
  // project tags
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  "Node.js": SiNodedotjs,
  Stripe: SiStripe,
  Redis: SiRedis,
  Storybook: SiStorybook,
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

export const PROJECT_TAGS = [
  ["Next.js", "PostgreSQL", "WebSockets"],
  ["Node.js", "TypeScript", "CLI"],
  ["React", "Tailwind", "Stripe"],
  ["Node.js", "Docker", "Redis"],
  ["React", "Storybook", "TypeScript"],
];
