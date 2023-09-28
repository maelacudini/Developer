import style from "./style.module.scss";
import { motion } from "framer-motion";
import Magnetic from "../Magnetic";

export default function index() {
  return (
    <section className={style.container}>
      <motion.h1
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.3, duration: 0.5 },
        }}
      >
        Hey!
      </motion.h1>
      <div className={style.outercontainer}>
        <article className={style.innercontainer}>
          <div className={style.inner}>
            <motion.h2
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              style={{ margin: "0", marginBottom: "30px" }}
            >
              Welcome to my website, I'm Cameron and I'm a Front End Developer
              based in North Germany.
            </motion.h2>
          </div>
          <div className={style.inner}>
            <motion.p
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              style={{ margin: "0" }}
            >
              My vision is to make the digital world more accessible, visually
              appealing, and user-friendly, one pixel at a time.
            </motion.p>
            <button
              data-scroll
              data-scroll-speed={0.1}
              className={style.button}
            >
              See more
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
