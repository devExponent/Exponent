import UILogo from "../src/assets/unilorin logo.png";
import UTULogo from "../src/assets/UTU logo.png";
import CTMIS from "../src/assets/CTMIS.png";
import EduLearn from "../src/assets/EduLearn.png";
import CertifyCheck from "../src/assets/CertifyCheck.png";
import MakeaDua from "../src/assets/MakeaDua.png";
import SleepsStiq from "../src/assets/SleepStiq.png";

import { FaReact, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiBootstrap,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
export const Education = [
  {
    logo: UTULogo,
    course: "MSc. Software Engineering",
    date: "Aug. 2025 - Ongoing",
    institution: "University of Turku, Finland.",
    description:
      "Developing advanced competence in system design, software architecture, software security, distributed systems, and data driven development. Exploring research in assistive and emerging technologies to understand how they can be applied in software design to support business sustainability and meet diverse user needs. Building practical and research backed experience through projects focused on modern software engineering challenges.",
  },
  {
    logo: UILogo,
    course: "BSc. Information and Communication Science",
    date: "Oct. 2018  -  Oct. 2023",
    institution: "University of Ilorin, Nigeria",
    description:
      "Graduated as the top student among more than 160 peers with the highest CGPA and received the Outstanding Student of the Year award. Gained strong expertise in data structures and algorithm, system analysis and design, programming, data analysis, and user experience through rigorous coursewor    k and hands-on project work. Built a solid foundation in software engineering with both theoretical depth and practical problem solving skills.",
  },
];

export const Technolgoies = [
  {
    Icon: SiJavascript,
    name: "JavaScript",
    bgGradient: "from-yellow-400 to-orange-500",
  },
  {
    Icon: FaReact,
    name: "React",
    bgGradient: "from-stone-400 to-blue-500",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    bgGradient: "from-blue-400 to-gray-600",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    bgGradient: "from-gray-700 to-stone-600",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    bgGradient: "from-green-400 to-teal-500",
  },
  {
    Icon: SiFramer,
    name: "Framer Motion",
    bgGradient: "from-cyan-500 to-purple-600",
  },
  {
    Icon: FaPython,
    name: "Python",
    bgGradient: "from-blue-400 to-yellow-400",
  },
  {
    Icon: SiFirebase,
    name: "Firebase",
    bgGradient: "from-yellow-400 to-red-300",
  },
];

export const Projects = [
  {
    image: CTMIS,
    name: "CTMIS",
    stack: [FaReact, SiTailwindcss, SiFirebase],
    description: "",
    link: "https://ctmis.vercel.app/",
  },
  {
    image: EduLearn,
    name: "EduLearn",
    stack: [SiHtml5, SiJavascript, SiBootstrap, SiMysql, FaPython],
    description: "",
    link: "https://edu-learn.vercel.app/",
  },
  {
    image: CertifyCheck,
    name: "CertifyCheck",
    stack: [SiNextdotjs, SiTailwindcss, SiMysql, FaPython],
    description: "",
    link: "https://cvp-pi.vercel.app/",
  },
  {
    image: SleepsStiq,
    name: "SleepStiq",
    stack: [SiHtml5, SiJavascript, SiBootstrap],
    description: "",
    link: "https://sleepstiq.vercel.app/",
  },

  {
    image: MakeaDua,
    name: "MakeaDua",
    stack: [SiHtml5, SiJavascript, SiBootstrap, SiMysql, FaPython],
    description: "",
    link: "https://makea-dua.vercel.app/",
  },
];
