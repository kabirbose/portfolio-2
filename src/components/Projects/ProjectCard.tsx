import styles from "./ProjectCard.module.css";

interface ProjectCardInfo {
  name: string;
  desc: string;
  img: string;
  repo: string;
  demo: string;
}

export default function ProjectCard({
  name,
  desc,
  img,
  repo,
  demo,
}: ProjectCardInfo) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} />

      <h3 className={styles.title}>{name}</h3>
      <p>{desc}</p>

      <div className={styles["btn-con"]}>
        <a target="_blank" href={repo} className={styles.btn}>
          Repo
        </a>
        <a target="_blank" href={demo} className={styles.btn}>
          Demo
        </a>
      </div>
    </div>
  );
}
