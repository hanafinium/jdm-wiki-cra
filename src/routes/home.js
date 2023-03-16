import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar.js";
import RecentEntries from "../components/RecentEntries/RecentEntries.js";
import Entry from "../components/Entry/Entry.js";

function Home(props) {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const getLatest = async () => {
      let results = await fetch(`http://localhost:5000/`).then((resp) =>
        resp.json()
      );
      console.log(results);
      setLatest(results);
    };
    getLatest();
  }, []);
  return (
    <div>
      <SearchBar />
      <section>
        <p>Latest additions</p>
      </section>
      {latest.map((item, index) => (
        // <p key={index}>{item.brand} {item.model}</p>
        <Entry key={index} item={item}/>
      ))}
    </div>
  );
}

export default Home;
