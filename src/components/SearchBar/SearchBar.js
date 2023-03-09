import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <section>
      <form>
        <input type="text" name="searchText" className="searchText" />
        <button type="submit" name="searchButton">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
