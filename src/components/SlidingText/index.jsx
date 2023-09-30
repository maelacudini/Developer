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
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className={style.main}>
      <img
        className={style.imagesliding}
        loading="lazy"
        alt="image"
        src="/Developer/bg.jpg"
      />
      <div data-scroll data-scroll-speed={0.1} className={style.desc}>
        <svg
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
        </svg>
        <h2>Freelance</h2>
        <h2>Graphic Designer</h2>
      </div>
      <div className={style.sliderContainer}>
        <div ref={slider} className={style.slider}>
          <p ref={firstText}>Graphic Designer</p>
          <p ref={secondText}>Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}
