import Document from "./Document";
import styles from "./Docs.module.css";

const data = [
  {
    name: "Resume",
    desc: "My professional resume.",
    link: "https://drive.google.com/file/d/1gGzEfeKjPOom64R2Tsqumk2_mt10rQmG/view?usp=drive_link",
  },
  {
    name: "Networking Case Study",
    desc: "Instructions for my case study from my Advanced Networking class. Copyright of Prof. Josh Lowe at Ontario Tech University.",
    link: "https://drive.google.com/file/d/1giBgpO_sJOlsSshzhOLJIW0EW0p3ZbDs/view?usp=drive_link",
  },
  {
    name: "Networking II Case Study",
    desc: "Instructions for my case study from my Advanced Networking II class. Copyright of Prof. Josh Lowe at Ontario Tech University.",
    link: "https://drive.google.com/file/d/1XX-GddCB7ekVkKz-whp-ishjTvNg-8E5/view?usp=drive_link",
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
