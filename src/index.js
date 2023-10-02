import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//array içerisine koyduk objeleri
const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/atomic.jpg",
    id: 1,
  },
  {
    author: "Rick Riordan",
    title: "Percy Jackson",
    img: "./images/percy.jpg",
    id: 2,
  },
];

// const names = ["john","peter", "george"]
// const newNames = names.map((item)=>{
//   return <h1>{item}</h1>
// })

const BookList = () => {
  const myBook = "Atomic Habits";
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  const someValue = "valueee";
  const displayValue = () => {
    // console.log(someValue);
  };
  return (
    <section className="booklist">
      {/* <EventExamples /> */}

      {books.map((book) => {
        // const { img, title, author, id } = book;
        return (
          <Book
            {...book}
            key={book.id}
            getBook={getBook}
            displayValue={displayValue}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  const getSingleBook = () =>{
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={()=>getBook(id)}>click</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
