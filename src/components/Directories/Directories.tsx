import styles from "./Directories.module.css";
import Projects from "../Projects/Projects";
import { useState } from "react";
import Docs from "../Docs/Docs";

export default function Directories() {
  const [showProj, setShowProj] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  return (
    <div className={styles.index}>
      <div className={styles.direc}>
        <p className={styles.directory} onClick={() => setShowProj(!showProj)}>
          projects
        </p>
        <p className={styles.directory} onClick={() => setShowDocs(!showDocs)}>
          docs
        </p>
        <p className={styles.directory}>books & movies</p>
        <p className={styles.directory}>blog</p>
      </div>

      {showDocs && <Docs />}
      {showProj && <Projects />}
    </div>
  );
}
