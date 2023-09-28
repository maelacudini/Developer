import style from "./style.module.scss";
import { motion } from "framer-motion";

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function index() {
  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={style.loader}
    >
      <motion.h1 variants={opacity} initial="initial" animate="enter">
        Just a minute...
      </motion.h1>
    </motion.section>
  );
}
