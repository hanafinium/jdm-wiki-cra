import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation.js";
import EngineDetails from "../components/EngineDetails/EngineDetails.js";
// import { ObjectId } from "mongodb";

function Model() {
  const [modelData, setModelData] = useState({});
  const [engineCode, setEngineCode] = useState("");
  const [engineData, setEngineData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { brandId, modelId } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const getModelData = async () => {
      try {
        await fetch(`/api/posts/${brandId}/${modelId}`, {
          method: "GET",
        })
          .then((resp) => resp.json())
          .then((json) => {
            setModelData(json);
            console.log(json);
          });
      } catch (error) {
        console.error(error);
      }
    };
    getModelData();
  }, [brandId, modelId]);

  const onSubmit = async (edits, id = modelData._id) => {
    console.log(edits);
    try {
      const response = await fetch(
        `/api/posts/${brandId}/${modelId}`,
        {
          method: "PUT",
          body: { ...edits, _id: id },
        }
      );
      console.log(response);
      setEditMode(false);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/posts/${brandId}/${modelId}`,
        {
          method: "DELETE",
          body: JSON.stringify({ id: "" }), // DELETE POSSIBLY DOES NOT SEND BODY CONTENT IN THE REQUEST, ALTERNATIVELY I CAN APPEND THE ID OR THE DELETE BY MODELCODE/ENGINECODE
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <React.Fragment>
      <MainNavigation />
      <h2 style={{ textTransform: "uppercase", fontWeight: "600" }}>
        {modelData.maker} {modelData.model}
      </h2>
      <section>
        <h3>Technical Specifications</h3>
        <select
          onChange={(e) => {
            setEngineCode(e.target.value);
            setEngineData();
          }}
        >
          <option value="">Select Engine</option>
          {modelData?.engine?.map((engine) => (
            <option value={engine.engineCode}>{engine.engineCode}</option>
          ))}
        </select>
        {engineCode !== "" ? (
          <EngineDetails modelData={modelData} engineCode={engineCode} />
        ) : (
          <></>
        )}
      </section>
      <div style={{ display: editMode ? "none" : "block" }}>
        <button disabled={false} onClick={handleDelete}>
          DELETE
        </button>
        <button disabled={false} onClick={() => setEditMode(true)}>
          EDIT
        </button>
      </div>
    </React.Fragment>
  );
}

export default Model;
