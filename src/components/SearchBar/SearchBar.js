import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <section>
      <form>
        <input type="text" name="searchText" className="searchText" />
        <Button type="submit" name="searchButton">
          Search
        </Button>
      </form>
    </section>
  );
}

export default SearchBar;
