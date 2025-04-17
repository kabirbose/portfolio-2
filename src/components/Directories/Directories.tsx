import styles from "./Directories.module.css";
import Projects from "../Projects/Projects";

export default function Directories() {
  return (
    <div className={styles.index}>
      <div className={styles.direc}>
        <h3>index:</h3>
        <p className={styles.directory}>projects</p>
        <p className={styles.directory}>docs</p>
        <p className={styles.directory}>books</p>
        <p className={styles.directory}>blog</p>
      </div>

      <Projects />
    </div>
  );
}
