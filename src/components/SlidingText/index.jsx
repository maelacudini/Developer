import style from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function index() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(slider.current, {
      scrollTrigger: {
        document: document.documentElement, //so it's going to start at the top of the document, the whole document
        start: 0,
        end: window.innerHeight, //full lenght of the window
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1), //so it reverses the direction based on the scroll
      },
      x: "-=300px", //so when you scroll it's going to move a bit by 300px
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={style.main}>
      <img
        className={style.imagesliding}
        loading="lazy"
        alt="image"
        src="https://maelacudini.github.io/Developer/bg.jpg"
      />
      <div className={style.sliderContainer}>
        <div ref={slider} className={style.slider}>
          <p ref={firstText}>Front End Developer</p>
          <p ref={secondText}>Front End Developer</p>
        </div>
      </div>
    </div>
  );
}
