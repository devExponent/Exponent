import { Education } from "../DATA";

const Section1 = () => {
  return (
    <div className="w-10/12 lg:w-6/12 mx-auto text-white">
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
        My Education
      </h1>

      {Education.map((education, index) => (
        <ul
          key={index}
          className="flex flex-col md:flex-row gap-5 items-center rounded-xl border p-2 my-5"
        >
          <li>{education.logo}</li>
          <div className="flex-1">
            <div className="flex items-center justify-between w-full">
              <span>{education.course}</span>
              <span>{education.date}</span>
            </div>
            <div>
              <span>{education.institution}</span>
              <p>{education.description}</p>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Section1;
