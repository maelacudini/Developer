import { useRef } from "react";
import style from "./style.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"],
    //the end of the container is considered the starting point, and the start of the container is considered the ending point
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section id="about" ref={container} className={style.about}>
      <h1>About</h1>
      <motion.div style={{ width: width }} className={style.line}></motion.div>
      <article>
        <motion.h2>
          With a keen eye for detail and a love for elegant design, I specialize
          in crafting user interfaces that not only look stunning but also
          provide seamless experiences. My mission is to bridge the gap between
          technology and aesthetics, ensuring that every pixel serves a purpose.
        </motion.h2>
        <p>
          I find inspiration in the challenges of the digital world, just as I
          do in scaling new heights in the great outdoors. Whether it's
          designing a captivating website or tackling a steep ascent, I thrive
          on pushing boundaries and embracing the journey.
        </p>
        <p>
          If you're looking for a developer who can turn your vision into a
          reality while ensuring every detail shines, I'm here to bring your
          projects to life.
        </p>
      </article>
    </section>
  );
}
