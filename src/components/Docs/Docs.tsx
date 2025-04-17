import Document from "./Document";
import styles from "./Docs.module.css";

const data = [
  {
    name: "Resume",
    desc: "My professional resume.",
    link: "/",
  },
  {
    name: "Advanced Networking assignment",
    desc: "My professional resume.",
    link: "/",
  },
  {
    name: "Advanced Networking II",
    desc: "My professional resume.",
    link: "/",
  },
];

export default function Docs() {
  return (
    <div className={styles.con}>
      {data.map((item) => (
        <Document title={item.name} desc={item.desc} link={item.link} />
      ))}
    </div>
  );
}
