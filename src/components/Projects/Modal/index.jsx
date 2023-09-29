import Image from "next/image";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;
  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={style.modalContainer}
    >
      <div style={{ top: index * -100 + "%" }} className={style.modalSlider}>
        {projects.map((project, index) => {
          const { url, color } = project;
          return (
            <div
              className={style.modal}
              style={{ backgroundColor: color }}
              key={`modal_${index}`}
            >
              <Image src={url} width={300} height={200} alt={project.title} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
