import NavBar from "../component/nav/NavBar";
import ProfileImg from "../assets/Profile.jpeg";

const Header = () => {
  return (
    <div>
      <NavBar />
      <section className="min-h-screen flex items-center justify-center">
        <div className=" w-10/12 lg:w-6/12 grid grid-cols-1  items-center gap-5 md:grid-cols-2 text-white ">
          <div className="order-2 md:order-1">
            <p className="mb-5 text-[#2753b1] font-bold text-lg">
              Learning, Building & Advancing Human-Centered Technology.
            </p>
            <p>Hello, I am Muhammad</p>
            <p>
              A solution-oriented Frontend Software Engineer with a
              demonstrative
            </p>
            <p>
              transforming ideas into user-friendly, interactive, and stunning
              digital experiences.
            </p>
          </div>
          <div className="order-1 md:order-2 mx-auto">
            <div className="w-full aspect-square max-w-[350px] mx-auto">
              <img
                src={ProfileImg}
                alt="profile image"
                className="rounded-full shadow-2xl shadow-[#09389742]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
