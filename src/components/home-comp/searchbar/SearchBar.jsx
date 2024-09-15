import React from "react";

import { CiSearch } from "react-icons/ci";
import "./searchbar.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <form action="" className="search">
        <input type="text" placeholder="Search for articles or issues..." />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
