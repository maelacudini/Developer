import { useRef } from "react";
import style from "./style.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../Magnetic";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const xleft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-180, 50]);

  return (
    <footer id="footer" ref={container} className={style.footer}>
      <div>
        <h1>Let's work together!</h1>
        <p>Feel free to contact me anytime and share your ideas.</p>
      </div>

      <div className={style.arrowcontainer}>
        <motion.svg
          style={{ rotate }}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-arrow-down-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </motion.svg>
      </div>

      <div className={style.buttoncontainer}>
        <motion.button style={{ x: xleft }} className={style.button}>
          See more
        </motion.button>
      </div>

      <div className={style.pills}>
        <Magnetic>
          <p>cameronmuller@gmail.com</p>
        </Magnetic>
        <Magnetic>
          <p>+123456789</p>
        </Magnetic>
      </div>

      <div className={style.socials}>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
    </footer>
  );
}
