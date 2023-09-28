"use client";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Nav from "./Nav";
import Magnetic from "../Magnetic";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const burger = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, { scale: 1 });
        },
        onEnterBack: () => {
          gsap.to(burger.current, { scale: 0 });
        },
      },
    });
  }, []);

  return (
    <Fragment>
      <div className={style.header}>
        <div className={style.logo}>
          <p className={style.copyright}>©</p>
          <div className={style.name}>
            <p className={style.codeBy}>Code by Maela</p>
            <p className={style.fullname}>Maela Cudini</p>
          </div>
        </div>

        <nav className={style.nav}>
          <Magnetic>
            <div className={style.el}>
              <Link href="#work">Work</Link>
              <div className={style.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={style.el}>
              <Link href="#about">About</Link>
              <div className={style.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={style.el}>
              <Link href="#footer">Contact</Link>
              <div className={style.indicator}></div>
            </div>
          </Magnetic>
        </nav>
      </div>

      <div ref={burger} className={style.containerbtn}>
        <div className={style.headerbtn}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={style.button}
          >
            <div
              className={`${style.burger} ${
                isActive ? style.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </Fragment>
  );
}
