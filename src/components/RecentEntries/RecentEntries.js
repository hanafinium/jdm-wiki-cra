import React from "react";
import { useState, useEffect } from "react";
import "./recententries.css";

function RecentEntries(props) {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const getLatest = async () => {
      let results = await fetch(`http://localhost:3000/`).then((resp) =>
        resp.json()
      );
      console.log(results);
      setLatest(results);
    };
    getLatest();
  }, []);
  return (
    <section>
      <p>Latest additions</p>
      {latest.map((item) => {
        return <p>{item.name}</p>;
      })}
    </section>
  );
}

export default RecentEntries;
