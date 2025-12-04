import "./App.css";
import NavBar from "./component/nav/NavBar";
import { motion } from "framer-motion";

function App() {
  const pvariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        // fixed typo here
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section id="background">
      <div>
        <NavBar />
        <motion.div variants={pvariant} initial="hidden" animate="show">
          <motion.p
            className="text-white my-5"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            adipisci ducimus distinctio suscipit, ullam voluptate unde quas?
            Nobis illum a earum enim! Sunt architecto quos nulla praesentium
            vel, deserunt quibusdam, quaerat eveniet ab fuga temporibus?{" "}
          </motion.p>
          <motion.p
            className="text-white"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id, labore eligendi velit aperiam odio reiciendis quos temporibus
            atque! Autem.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
