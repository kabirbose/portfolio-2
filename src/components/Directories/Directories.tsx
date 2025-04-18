import styles from "./Directories.module.css";
import Projects from "../Projects/Projects";
import { useState } from "react";
import Docs from "../Docs/Docs";
import Other from "../Other/Other";

export default function Directories() {
  const [showProj, setShowProj] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showOther, setShowOther] = useState(false);
  return (
    <div className={styles.index}>
      <div className={styles.direc}>
        <p className={styles.directory} onClick={() => setShowProj(!showProj)}>
          projects
        </p>
        <p className={styles.directory} onClick={() => setShowDocs(!showDocs)}>
          docs
        </p>
        <p
          className={styles.directory}
          onClick={() => setShowOther(!showOther)}
        >
          other
        </p>
      </div>

      {showDocs && <Docs />}
      {showProj && <Projects />}
      {showOther && <Other />}
    </div>
  );
}
