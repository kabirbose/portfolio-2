import styles from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src="https://images.unsplash.com/photo-1744361448609-c5d3417f00ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      />

      <h3 className={styles.title}>Project Name</h3>
      <p>Query your relational database with English instead of SQL.</p>

      <div className={styles["btn-con"]}>
        <button className={styles.btn}>Repo</button>
        <button className={styles.btn}>Demo</button>
      </div>
    </div>
  );
}
