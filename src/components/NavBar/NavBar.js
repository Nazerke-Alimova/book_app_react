import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaSearch color="#fff" /> Search
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <FaHeart color="tomato" /> WishList
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
