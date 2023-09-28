import styles from "./style.module.scss";

export default function index() {
  return (
    <div id="footer" className={styles.footer}>
      <a>Awwwards</a>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a>
    </div>
  );
}
