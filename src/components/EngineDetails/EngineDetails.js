import React from "react";

function EngineDetails({ modelData, engineCode }) {
const engine = modelData.engine.find((engine) => engine.engineCode === engineCode);
return (
  <React.Fragment>
    <p>{engine.engineDisplacement}</p>
    <p>{engine.engineHP}</p>
  </React.Fragment>
);
}

export default EngineDetails;
