import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.js";
import RecentEntries from "../components/RecentEntries/RecentEntries.js";

function Home(props) {
  return (
    <div>
      <SearchBar />
      <RecentEntries />
    </div>
  );
}

export default Home;
