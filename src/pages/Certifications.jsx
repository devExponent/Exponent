import { FaCertificate } from "react-icons/fa";
import { Certifications } from "../DATA";

const MyCertifications = () => {
  return (
    <div>
      <div className="bg-[#19294ae1]">
        <div className="w-full md:w-11/12 mx-auto text-white py-8">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl flex justify-center gap-2 mb-7 font-extrabold text-white">
            <FaCertificate /> Certifications
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
            {Certifications.map((cert, i) => (
              <li
                className="bg-[#00000038] border border-[#808080b2] p-3 rounded-lg"
                key={i}
              >
                <img src={cert.image} alt={cert.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCertifications;
