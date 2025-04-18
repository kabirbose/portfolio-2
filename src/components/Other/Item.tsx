import styles from "./Item.module.css";

interface ItemData {
  image: string;
  title: string;
  desc: string;
}

export default function Item({ image, title, desc }: ItemData) {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={image} />
      <div className={styles["text-con"]}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
