import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//array içerisine koyduk objeleri
const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/atomic.jpg",
  },
  {
    author: "Rick Riordan",
    title: "Percy Jackson: The Demigod",
    img: "./images/percy.jpg",
  },
];
 


// const names = ["john","peter", "george"]
// const newNames = names.map((item)=>{
//   return <h1>{item}</h1>
// })

const BookList = () => {
  return (
    <section className="booklist">
     {books.map(()=>{
      return <div><h2></h2></div>
     })}
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
