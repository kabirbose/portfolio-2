import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const data = [
  {
    name: "SQL Translator",
    desc: "Lets you query your relational database with English instead of SQL.",
    image:
      "https://www.jetbrains.com/datagrip/img/screenshots/query-console.png",
    repo: "https://github.com/kabirbose/sql-translator",
    demo: "",
  },
  {
    name: "Arista Automation - Day 1",
    desc: "Arista automation introduction with Git, Python, Ansible, Jinja, YAML.",
    image:
      "https://repository-images.githubusercontent.com/207655290/6585a7da-346c-4f5d-ba16-ed81af762ca1",
    repo: "https://github.com/kabirbose/ci-workshops-fundamentals",
    demo: "",
  },
  {
    name: "Arista Automation - Day 2",
    desc: "Deploying a dual data-center WAN using Arista AVD.",
    image:
      "https://repository-images.githubusercontent.com/207655290/6585a7da-346c-4f5d-ba16-ed81af762ca1",
    repo: "https://github.com/kabirbose/ci-workshops-avd",
    demo: "",
  },
  {
    name: "Advanced Networking Case Study (I & II)",
    desc: `Configuring enterprise networks. Further details in the "docs" section of this website.`,
    image:
      "https://www.firefly.cloud/wp-content/uploads/2025/03/Cisco-IOS-2.jpg",
    repo: "",
    demo: "",
  },
  {
    name: "CCNA Labs",
    desc: "CCNA labs from Jeremy's IT Lab.",
    image: "https://cdn.fs.teachablecdn.com/oIf4GkTei8igO0j3z70g",
    repo: "",
    demo: "",
  },
  {
    name: "CCNA Mega Lab",
    desc: "Completed the CCNA mega lab from Jeremy's IT Lab.",
    image:
      "https://learningnetwork.cisco.com/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480&versionId=0683i000001rlhL&operationContext=CHATTER&contentId=05T3i00000ACG9t&page=0",
    repo: "",
    demo: "",
  },
  {
    name: "PyNetbox Automation",
    desc: "Utilized the PyNetbox library to automate node configurations in Netbox.",
    image:
      "https://blog.jdneer.com/content/images/2022/12/netbox_prefixes_overview.jpg",
    repo: "",
    demo: "",
  },
  {
    name: "WTI Zero-Touch Provisioning",
    desc: "Lets WTIs access a TFTP server and configure themselves.",
    image:
      "https://cdn.shopify.com/s/files/1/0378/0136/1540/files/WTI_Logo_Square_Help_2020_outlines_1200x628_Border_06e879a1-f199-415b-8825-bacba7266e48.jpg?v=1599994126",
    repo: "",
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
