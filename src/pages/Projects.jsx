import { Projects } from "../DATA";
import { FaFolderOpen } from "react-icons/fa";

const MyProjects = () => {
  return (
    <div className="bg-[#111827]">
      <div className="w-full md:w-11/12 mx-auto text-white py-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl flex justify-center gap-2 mb-7 font-extrabold text-white">
          <FaFolderOpen /> My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white p-6">
          {Projects.map((projectsLists, index) => {
            const { image, name, stack, description, link } = projectsLists;
            return (
              <div
                className="bg-[#00000038] border border-[#808080b2] p-3 rounded-lg"
                key={index}
              >
                <div>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-32 sm:h-40 md:h-48  object-cover rounded-md"
                  />
                </div>
                <div className="flex justify-between my-2">
                  <ul className="flex gap-2  items-center">
                    {projectsLists.stack.map((StacksIcon, index) => (
                      <li key={index}>
                        <StacksIcon className="text-xl lg:text-2xl text-blue-300" />
                      </li>
                    ))}
                  </ul>
                  <div>dkfdjfj</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
