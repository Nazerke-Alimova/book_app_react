import React from "react";
import "./Button.css";

export default function Button({ onClick }) {
  return (
    <button className="search_btn" type="submit" onClick={onClick}>
      search
    </button>
  );
}
