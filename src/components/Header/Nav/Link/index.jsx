import Link from "next/link";
import style from "./style.module.scss";
import { motion } from "framer-motion";

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function index({ data }) {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={data.index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={style.link}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
