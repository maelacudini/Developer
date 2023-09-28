import { useEffect } from "react";
import style from "./style.module.scss";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export default function index() {
  const mouse = {
    x: useMotionValue(0), //initialize x and y values, before you start traking them
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smooth = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const velocity = useVelocity(smooth.x);

  const scale = useTransform(velocity, [200, 0, -200], [2, 1, 2]);

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smooth.x,
        top: smooth.y,
        scale: scale,
      }}
      className={style.cursor}
    ></motion.div>
  );
}
