import styles from "./Directories.module.css";
import Projects from "../Projects/Projects";
import { useState } from "react";
import Docs from "../Docs/Docs";
import Other from "../Other/Other";

type Section = "docs" | "projects" | "other" | null;

export default function Directories() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  const toggleSection = (section: Section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.index}>
      <div className={styles.direc}>
        <p className={styles.directory} onClick={() => toggleSection("docs")}>
          docs
        </p>
        <p
          className={styles.directory}
          onClick={() => toggleSection("projects")}
        >
          projects
        </p>
        <p className={styles.directory} onClick={() => toggleSection("other")}>
          other
        </p>
      </div>

      {!activeSection && (
        <div className={styles["pug-con"]}>
          <p className={styles.desc}>
            Welcome to my website, here's a cool picture of my dog!
          </p>
          <img className={styles.puggy} src="puggy.png" />
        </div>
      )}
      {activeSection === "docs" && <Docs />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "other" && <Other />}
    </div>
  );
}
