import { Education } from "../DATA";

const Section1 = () => {
  return (
    <div>
      <ul>
        {Education.map((index, education) => {
          return (
            <>
              <li key={index}>{education.logo}</li>

              <li>{education.course}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Section1;
