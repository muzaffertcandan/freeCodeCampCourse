import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const img = "./images/atomic.jpg";
// const title = "Atomic Habits";
// const author = "James Clear";

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/atomic.jpg",
};
const secondBook = {
  author: "Rick Riordan",
  title: "Percy Jackson: The Demigod",
  img: "./images/percy.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        {/* <p>
          Text for nothing
        </p>
        <button>
          Hey button
        </button> */}
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
