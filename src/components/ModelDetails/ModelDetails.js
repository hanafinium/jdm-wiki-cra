import React from "react";
import EngineDetails from "../EngineDetails/EngineDetails.js";

function ModelDetails(props) {
  return (
    <section>
      {props.brandData.map((entry) => {
        return (
          <section key={entry._id} className="detailsContainer">
            <div className="table-header">
              <p>{entry.model}</p>
              <p>{entry.modelCode}</p>
              <p>production years</p>
            </div>
            <EngineDetails details={entry.engine} />
          </section>
        );
      })}
    </section>
  );
}

export default ModelDetails;
