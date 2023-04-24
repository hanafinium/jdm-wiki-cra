import React from "react";
import { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation.js";
import BrandNavigation from "../components/BrandNavigation/BrandNavigation.js";
import Entry from "../components/Entry/Entry.js";

function Home(props) {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const getLatest = async () => {
      let results = await fetch(`http://localhost:5000/`).then((resp) =>
        resp.json()
      );
      setLatest(results);
    };
    getLatest();
  }, []);
  return (
    <React.Fragment>
      <MainNavigation/>
      <section className="homepage-section">
        <BrandNavigation/>
      </section>
      <section className="homepage-section">
        <p className="medium-font header">Latest additions</p>
        {latest.map((item, index) => (
          <Entry key={index} item={item}/>
        ))}
      </section>
    </React.Fragment>
  );
}

export default Home;
