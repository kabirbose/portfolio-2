import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
