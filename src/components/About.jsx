import { motion } from "framer-motion";
import Linx from "./Linx";
import Skills from "./Skills";
const About = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto relative h-full text-text">
      <motion.div
        className="text-4xl pb-6 pt-24 tracking-wide font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        My Skills
      </motion.div>
      <Skills />
    </div>
  );
};

export default About;
