import { Fragment, useState } from "react";
import style from "./style.module.scss";
import Project from "./Project";
import Modal from "./Modal";
import Magnetic from "../Magnetic";

const projects = [
  {
    title: "Paris",
    url: "/Developer/site.jpg",
    color: "#000000",
  },
  {
    title: "Milan",
    url: "/Developer/site2.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Vienna",
    url: "/Developer/site3.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Amsterdam",
    url: "/Developer/site4.jpg",
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
    <Fragment>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Magnetic>
          <button className={style.button}>More work</button>
        </Magnetic>
      </div>
    </Fragment>
  );
}
