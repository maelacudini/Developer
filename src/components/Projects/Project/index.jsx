import style from "./style.module.scss";

export default function index({ index, project, setModal }) {
  const { title, src, color } = project;
  return (
    <div
      className={style.project}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h1>{title}</h1>
      <p>{color}</p>
    </div>
  );
}
