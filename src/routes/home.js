import React from "react";
import { useState, useEffect } from "react";
import MainNavigation from "../components/mainNavigation/MainNavigation.js";
import BrandNavigation from "../components/BrandNavigation/BrandNavigation.js";
import Entry from "../components/Entry/Entry.js";

function Home() {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const getLatest = async () => {
      try {
        const resp = await fetch("/api", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        const latestEntries = await resp.json();
        setLatest(latestEntries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getLatest();
  }, []);
  return (
    <div>
      <MainNavigation />
      <div>
        <h3>Latest entries:</h3>
        {latest?.map((item, index) => (
          <Entry key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
