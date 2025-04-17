import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const data = [
  {
    name: "SQL Translator",
    desc: "Query your relational database with English instead of SQL.",
    image: "https://ingo.it/storage/2024/03/database.jpg",
    repo: "https://github.com/kabirbose/sql-translator",
    demo: "",
  },
  {
    name: "Arista Automation - Day 1",
    desc: "Arista automation with Git, Python, Ansible, Jinja, YAML.",
    image:
      "https://repository-images.githubusercontent.com/207655290/6585a7da-346c-4f5d-ba16-ed81af762ca1",
    repo: "https://github.com/kabirbose/ci-workshops-fundamentals",
    demo: "",
  },
  {
    name: "Arista Automation - Day 2",
    desc: "Applying Day 1 tooling to a dual data-center WAN.",
    image:
      "https://repository-images.githubusercontent.com/207655290/6585a7da-346c-4f5d-ba16-ed81af762ca1",
    repo: "https://github.com/kabirbose/ci-workshops-avd",
    demo: "",
  },
  {
    name: "Advanced Networking Case Study",
    desc: "Enterprise networking case study from Ontario Tech University.",
    image:
      "https://learn.g2.com/hubfs/Learn%20Hub%20Featured%20Images/_learn-iPaaS@2x.png",
    repo: "",
    demo: "",
  },
  {
    name: "LeetCode Solutions",
    desc: "Follow my LeetCode solutions (in C++ and Python).",
    image:
      "https://miro.medium.com/v2/resize:fit:1008/1*VOQU8CuPG34Gsd1yJCadOQ.png",
    repo: "https://github.com/kabirbose/leetcode-cpp",
    demo: "",
  },
];

export default function Projects() {
  return (
    <div>
      <p className={styles.desc}>
        Here are a few of my projects. More on my GitHub :)
      </p>
      <div className={styles.projects}>
        {data.map((item) => (
          <ProjectCard
            name={item.name}
            desc={item.desc}
            img={item.image}
            repo={item.repo}
            demo={item.demo}
          />
        ))}
      </div>
    </div>
  );
}
