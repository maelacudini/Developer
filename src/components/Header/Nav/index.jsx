import style from "./style.module.scss";
import Link from "./Link";
import Footer from "./Footer";
import Curve from "./Curve";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#footer",
  },
];

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function index() {
  const nav = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(nav.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(nav.current, { x: "0%", ease: "power1.inOut" });
        },
        onEnterBack: () => {
          gsap.to(nav.current, { x: "100%", ease: "power1.inOut" });
        },
      },
    });
  }, []);

  return (
    <motion.nav
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={style.menu}
      ref={nav}
    >
      <div className={style.body}>
        <div className={style.nav}>
          <div className={style.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => (
            <Link key={index} data={{ ...item, index }} />
          ))}
        </div>
        <Footer />
      </div>
    </motion.nav>
  );
}
