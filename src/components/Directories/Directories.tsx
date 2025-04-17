import styles from "./Directories.module.css";
import Projects from "../Projects/Projects";
import { useState } from "react";

export default function Directories() {
  const [showProj, setShowProj] = useState(false);
  return (
    <div className={styles.index}>
      <div className={styles.direc}>
        <p className={styles.directory} onClick={() => setShowProj(!showProj)}>
          projects
        </p>
        <p className={styles.directory}>docs</p>
        <p className={styles.directory}>books</p>
        <p className={styles.directory}>blog</p>
      </div>

      {showProj && <Projects />}
    </div>
  );
}
