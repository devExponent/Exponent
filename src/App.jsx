import "./App.css";
import NavBar from "./component/nav/NavBar";
import { motion } from "framer-motion";
import Header from "./pages/Header";
import MyEducation from "./pages/Education";
import Technologies from "./pages/Technologies";
import MyProjects from "./pages/Projects";
import MyCertifications from "./pages/Certifications";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <section id="background">
      <div>
        <NavBar />
        <Header />
        <MyEducation />
        <Technologies />
        <MyProjects />
        <MyCertifications />
        <Footer />
      </div>
    </section>
  );
}

export default App;
