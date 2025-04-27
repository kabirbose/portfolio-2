import styles from "./Other.module.css";
import Item from "./Item";

const data = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568997754i/39018271.jpg",
    title: "Batman: The Court of Owls (Saga)",
    desc: "My favourite superhero and my favourite story. If you really enjoy a good, grounded detective story without filler and multiversal threats, you will love this book. Kind of made me want to become Batman after the first time I read it. My rating 10/10.",
  },
  {
    img: "https://m.media-amazon.com/images/I/A1L11GFxnkL._UF894,1000_QL80_.jpg",
    title: "Venom Volume 1: Rex",
    desc: "This book is filled with action from the first page, however towards the 3/4, it really lost its shimmer. It has a great story and displays the true potential of symbiotes in the Marvel Universe. And the best part, you get to see Knull for the first time. My rating 8/10.",
  },
  {
    img: "https://i.ebayimg.com/images/g/yrEAAOSwQuFgSJwK/s-l1200.jpg",
    title: "Invincible (Series)",
    desc: "This entire series is a breathe of fresh air. I read it after watching the show on Prime and I was not disappointed at all. Great story and even better character development. My only critique is the sometimes inconsistent art style. My rating: 9/10.",
  },
];

export default function () {
  return (
    <div>
      <p className={styles.desc}>Random stuff that I like :]</p>
      <div className={styles.con}>
        {data.map((i) => (
          <Item title={i.title} image={i.img} desc={i.desc} />
        ))}
      </div>
    </div>
  );
}
