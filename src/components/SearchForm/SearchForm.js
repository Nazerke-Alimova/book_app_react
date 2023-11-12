import React from "react";
import { useState } from "react";
import { Books } from "../../zustand/GetBook";
import Search from "../Search/Search";
import "./SearchForm.css";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const getBooks = Books((state) => state.getBooks);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    getBooks(inputValue);
    setInputValue("");
  };

  return (
    <section className="search_section">
      <div className="search_container">
        <h2 className="search_title">Book finder</h2>
        <Search inputValue={inputValue} onChange={onChange} onClick={onClick} />
      </div>
      <div className="search_img">
        <img
          src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg"
          alt=""
        />
      </div>
    </section>
  );
}
