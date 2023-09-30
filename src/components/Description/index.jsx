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
            <motion.h1
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
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </motion.h1>
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
              My vision is to breathe life into ideas, crafting visually
              captivating designs that leave a lasting impact.
            </motion.p>
            <Magnetic>
              <button
                data-scroll
                data-scroll-speed={0.1}
                className={style.button}
              >
                See more
              </button>
            </Magnetic>
          </div>
        </article>
      </div>
    </section>
  );
}
