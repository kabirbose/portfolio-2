import styles from "./Other.module.css";
import Item from "./Item";

const data = [
  {
    title: "The C++ Programming Language",
    desc: "I really enjoyed this book, but it's quite a long read. In my opinion, it can get difficult to get through because of the 'filler', however don't let that discourage you. If you want to understand the inner workings of C++, definitely start here. While I haven't finished the entire book yet, I hope to soon. My rating: 8/10",
    img: "https://m.media-amazon.com/images/I/711AW7I8e8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    img: "https://m.media-amazon.com/images/I/61UIpzqnkRL._AC_UF1000,1000_QL80_.jpg",
    title: "Operating Systems: Three Easy Pieces",
    desc: "After getting a sad 'D' in my operating systems class, I had to bounce back. This is what helped me understand the basic concepts of an OS: virtualization, concurrency, and persistence. If you've never used C or Assembly before, learn those first. My rating: 10/10.",
  },
];

export default function () {
  return (
    <div>
      <p className={styles.desc}>Random stuff that I wanted to add :]</p>
      <div className={styles.con}>
        {data.map((i) => (
          <Item title={i.title} image={i.img} desc={i.desc} />
        ))}
      </div>
    </div>
  );
}
