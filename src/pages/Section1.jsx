import { Education } from "../DATA";

const Section1 = () => {
  return (
    <div className="w-11/12 lg:w-6/12 mx-auto text-white">
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
        My Education
      </h1>

      {Education.map((education, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-5 items-center rounded-xl border p-3 my-5"
        >
          <div>
            <img
              src={education.logo}
              alt="University of Ilorin Logo"
              className="w-30 sm:w-35 md:w-40 lg:w-45 h-auto"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-xl">{education.course}</span>
              <span>{education.date}</span>
            </div>
            <div>
              <span>{education.institution}</span>
              <p className="break-all whitespace-normal">
                {education.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section1;
