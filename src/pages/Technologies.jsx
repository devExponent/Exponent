import { FaCode } from "react-icons/fa";
import { Technolgoies } from "../DATA";
const Technologies = () => {
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white p-6">
          {Technolgoies.map((stacks, index) => {
            const { Icon, name, bgGradient } = stacks;

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
