import { FaCode } from "react-icons/fa";
import { FaReact, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const Technologies = () => {
  const Technolgoies = [
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

  return (
    <section className="bg-[#111827]">
      <div className="w-10/12 md:w-10/12 lg:w-8/12 mx-auto text-white py-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl flex justify-center gap-2 mb-7 font-extrabold text-white">
          <FaCode /> My Tech Stack
        </h1>
        <p className="text-center font-bold text-md md:text-xl">
          Technologies I rely on to design, build, and refine meaningful digital
          experiences that solve real problems.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-white p-6">
          {Technolgoies.map((stacks, index) => {
            const { Icon, name, color, bgGradient } = stacks;

            return (
              <div
                className={`
                    relative p-6 sm:p-8 rounded-2xl border-4 border-black
                    bg-gradient-to-br ${bgGradient} 
                    cursor-pointer
                    backdrop-blur-sm bg-opacity-90
                    flex flex-col items-center justify-center
                  `}
                key={index}
              >
                <div>
                  <Icon className="text-4xl sm:text-5xl md:text-6xl text-white " />
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white text-center drop-shadow-lg">
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
