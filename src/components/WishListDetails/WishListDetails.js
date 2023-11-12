import React from "react";
import { Books } from "../../zustand/GetBook";
import BookDetails from "../BookDetails/BookDetails";
import "./WishListDetails.css";

export default function WishListDetails() {
  const wish = Books((state) => state.wishlist);
  return (
    <div className="wishlist_cards">
      {wish.map((el, i) => {
        return (
          <BookDetails
            key={i}
            isEbook={el.isEbook}
            id={el.id}
            title={el.title}
            date={el.date}
            authors={el.authors ? el.authors[0] : "Unknown Author"}
            subTitle={el.subTitle}
            img={el.img}
            description={el.description}
            link={el.link}
            buy={el.buy}
            wishState={el.wishState}
          />
        );
      })}
    </div>
  );
}
