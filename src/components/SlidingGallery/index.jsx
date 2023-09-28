import { useRef } from "react";
import style from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  {
    title: "C2 Montreal",
    url: "/images/c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    url: "/images/officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    url: "/images/locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    url: "/images/silencio.png",
    color: "#706D63",
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const xleft = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xright = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={container} className={style.container}>
      <motion.div style={{ x: xleft }} className={style.gallery}>
        <div className={style.gallerycontainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={style.imgcontainer}
              style={{ backgroundColor: image.color }}
            >
              <Image
                width={300}
                height={200}
                src={image.url}
                alt={image.title}
                className={style.image}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div style={{ x: xright }}>
        <div className={style.gallerycontainer}>
          {images.reverse().map((image, index) => (
            <div
              key={index}
              className={style.imgcontainer}
              style={{ backgroundColor: image.color }}
            >
              <Image
                width={300}
                height={200}
                src={image.url}
                alt={image.title}
                className={style.image}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
