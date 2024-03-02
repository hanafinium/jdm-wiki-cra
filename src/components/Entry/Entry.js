import React from "react";
import "./entry.css";

function Entry(props) {
  return (
    <div>
      <p>
        <a
          href={`/posts/${props.item.maker}/${props.item.model}`}
          className="latest-entry"
        >
          {props.item.maker.toUpperCase()} {props.item.model.toUpperCase()}
        </a>{" "}
        - Added on: {Intl.DateTimeFormat("en-GB").format(props.item.date)}
      </p>
    </div>
  );
}

export default Entry;
