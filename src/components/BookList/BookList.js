import React from "react";
import { Books } from "../../zustand/GetBook";
import BookDetails from "../BookDetails/BookDetails";
import "./BookList.css";

export default function BookList() {
  const books = Books((state) => state.books);

  return (
    <section className="book_list">
      {books.map((book) => {
        let link = "https://www.amazon.com.br/s?k=";
        if (!book.saleInfo.isEbook) {
          link = link + book.volumeInfo.title;
        }
        return (
          <BookDetails
            key={book.id}
            isEbook={book.saleInfo.isEbook}
            id={book.id}
            title={book.volumeInfo.title}
            date={book.volumeInfo.publishedDate}
            authors={book.volumeInfo.authors}
            subTitle={book.volumeInfo.publisher}
            img={book.volumeInfo.imageLinks?.thumbnail}
            description={book.volumeInfo.description}
            link={book.saleInfo.isEbook ? book.saleInfo.buyLink : link}
            buy={book.saleInfo.isEbook ? "Google Play" : "Amazon"}
            wishState={""}
          />
        );
      })}
    </section>
  );
}
