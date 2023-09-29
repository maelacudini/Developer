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
          With a sharp eye for detail and a deep appreciation for elegant
          design, I specialize in the art of graphic design. My expertise lies
          in creating visually striking and aesthetically pleasing designs that
          captivate the viewer's attention.
        </motion.h2>
        <p>
          My mission is to bridge the gap between art and communication,
          ensuring that every design I produce effectively conveys its intended
          message. I find inspiration in the challenges of the design world,
          much like I do in pushing my creative boundaries in other aspects of
          life. Whether I'm crafting a compelling visual identity or embarking
          on a personal adventure, I thrive on embracing the journey and
          reaching new heights in the world of design.
        </p>
      </article>
    </section>
  );
}
