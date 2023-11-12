import React from "react";
import Button from "../Button/Button";
import "./Search.css";
export default function Search({ inputValue, onChange, onClick }) {
  return (
    <div className="search_input">
      <input
        value={inputValue}
        onChange={onChange}
        placeholder="Search a book"
      />
      {inputValue && <Button onClick={onClick} />}
    </div>
  );
}
