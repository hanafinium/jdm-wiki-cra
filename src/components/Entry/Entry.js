import React from "react";
import "./entry.css";

function Entry(props) {
  return (
    <div>
      <p>{props.item.brand.toUpperCase()} {props.item.model.toUpperCase()} - Added on: {Intl.DateTimeFormat('en-GB').format(props.item.date)}</p> 
    </div>
  );
}

export default Entry;
