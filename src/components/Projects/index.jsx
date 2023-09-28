import { Fragment, useState } from "react";
import style from "./style.module.scss";
import Project from "./Project";
import Modal from "./Modal";

const projects = [
  {
    title: "C2 Montreal",
    url: "https://maelacudini.github.io/Developer/c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    url: "https://maelacudini.github.io/Developer/officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    url: "https://maelacudini.github.io/Developer/locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    url: "https://maelacudini.github.io/Developer/silencio.png",
    color: "#706D63",
  },
];

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

export default function index() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div id="work" className={style.main}>
      <div className={style.body}>
        <h1>My projects</h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            project={project}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
}
