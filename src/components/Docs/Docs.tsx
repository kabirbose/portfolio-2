import Document from "./Document";
import styles from "./Docs.module.css";

const data = [
  {
    name: "Resume",
    desc: "My professional resume.",
    link: "https://drive.google.com/file/d/1gGzEfeKjPOom64R2Tsqumk2_mt10rQmG/view?usp=drive_link",
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
    <div>
      <p className={styles.desc}>
        Supporting files/documents you might want to see!
      </p>
      <div className={styles.con}>
        {data.map((item) => (
          <Document title={item.name} desc={item.desc} link={item.link} />
        ))}
      </div>
    </div>
  );
}
