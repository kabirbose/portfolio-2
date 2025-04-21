import styles from "./Other.module.css";
import Item from "./Item";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/61UIpzqnkRL._AC_UF1000,1000_QL80_.jpg",
    title: "Operating Systems: Three Easy Pieces",
    desc: "After getting a 'D' in my Operating Systems class, this is what helped me understand the basic concepts of an OS. This book breaks it down into 3 parts: virtualization, concurrency, and persistence. If you've never used C or Assembly before, learn those first. My rating: 10/10.",
  },
  {
    title: "The C++ Programming Language",
    desc: "Great book that will take you from an intermediate C++ developer to a more seasoned one. Quite a long read and very extensive, but doesn't expect you to read or memorize every little detail. Goes in-depth about C++ architecture and techniques that anyone could find useful. My rating 8/10.",
    img: "https://m.media-amazon.com/images/I/711AW7I8e8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568997754i/39018271.jpg",
    title: "Batman: The Court of Owls (Saga)",
    desc: "My favourite superhero and my favourite story. If you really enjoy a good, grounded detective story without filler and multiversal threats, you will love this book. Kind of made me want to become Batman after the first time I read it. My rating 10/10.",
  },
  {
    img: "https://m.media-amazon.com/images/I/A1L11GFxnkL._UF894,1000_QL80_.jpg",
    title: "Venom Volume 1: Rex",
    desc: "This book is filled with action from the first page, however towards the 3/4, it really lost its shimmer. It has a great story and displays the true potential of symbiotes in the Marvel Universe. And the best part, you get to see Knull for the first time. My rating 7/10.",
  },
  {
    img: "https://i.ebayimg.com/images/g/yrEAAOSwQuFgSJwK/s-l1200.jpg",
    title: "Invincible (Series)",
    desc: "This entire series is a breathe of fresh air. I read it after watching the show on Prime and I was not disappointed at all. Great story and even better character development. My only critique is the sometimes inconsistent art style. My rating: 9/10.",
  },
  {
    img: "https://m.media-amazon.com/images/I/71I509tOf2L.jpg",
    title: "The Boys (Series)",
    desc: "The show is way better than the comic book series. This tries to be edgy for the sake of being edgy and is grotesque sometimes. My rating: 4/10.",
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
