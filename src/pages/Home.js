import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import BookList from "../components/BookList/BookList";

export default function Home() {
  return (
    <div>
      <SearchForm />
      <BookList />
    </div>
  );
}
