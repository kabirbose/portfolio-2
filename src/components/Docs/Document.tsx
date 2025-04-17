import styles from "./Document.module.css";

interface DocumentData {
  title: string;
  desc: string;
  link: string;
}

export default function Document({ title, desc, link }: DocumentData) {
  return (
    <div className={styles.doc}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <a className={styles.link} href={link}>
        link
      </a>
    </div>
  );
}
