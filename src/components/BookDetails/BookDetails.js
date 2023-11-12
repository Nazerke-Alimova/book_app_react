import React from "react";
import { Books } from "../../zustand/GetBook";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import "./BookDetails.css";

export default function BookDetails({
  id,
  title,
  date,
  authors,
  subTitle,
  img,
  description,
  link,
  buy,
  isEbook,
  wishState,
}) {
  const [wishBtnClr, setWishBtnClr] = useState(wishState || "");

  const addWishlist = Books((state) => state.addWishlist);
  const deleteWishlist = Books((state) => state.deleteWishlist);

  const onClick = () => {
    if (wishBtnClr) {
      setWishBtnClr("");
      deleteWishlist(id);
    } else {
      setWishBtnClr("red");

      addWishlist({
        id,
        title,
        date,
        authors,
        subTitle,
        img,
        description,
        link,
        buy,
        isEbook,
        wishState: "tomato",
      });
    }
  };

  return (
    <div className="book_card">
      <div className="book_content">
        <div
          onClick={() => {
            onClick();
          }}
          className="heart"
        >
          <AiFillHeart color={wishBtnClr || "gray"} /> wishlist
        </div>
        <h3 className="title">{title}</h3>
        <span>{date}</span>
        <span>{authors}</span>
        <p>{subTitle}</p>
        <img src={img} alt="" />
        <div className="description">
          <p className="description_txt">{description}</p>
        </div>
      </div>
      <a
        rel="noreferrer"
        target="_blank"
        href={link}
        className={isEbook ? "google" : "amazon"}
      >
        Buy on {buy}
      </a>
    </div>
  );
}
