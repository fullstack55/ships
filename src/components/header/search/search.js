import React, { useState } from "react";
import "./search.sass";

const Search = ( ) => {
  const [search, setSearch] = useState("Search");
  return (
    <>
      <div className="header__actions-text">
        <input
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          className="header__actions-text-input"
        />
      </div>
      <div className="header__actions-button-container">
        <span className="header__actions-button-text">Search</span>
      </div>
    </>
  );
};

export default Search;
