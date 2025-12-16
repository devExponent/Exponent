import "./App.css";
import NavBar from "./component/nav/NavBar";
import Header from "./pages/Header";
import MyEducation from "./pages/Education";
import Technologies from "./pages/Technologies";
import MyProjects from "./pages/Projects";
import MyCertifications from "./pages/Certifications";
import Footer from "./component/footer/Footer";
import Loader from "./component/Loader";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Header />
          {/* <MyEducation /> */}
          {/* <Technologies /> */}
          {/* <MyProjects /> */}
          {/* <MyCertifications /> */}
          {/* <Footer /> */}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
