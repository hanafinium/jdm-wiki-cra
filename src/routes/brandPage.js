import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation.js";
import ModelDetails from "../components/ModelDetails/ModelDetails.js";

function BrandPage() {
  const [brandData, setBrandData] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [modelFilter, setModelFilter] = useState("");
  const { brandId } = useParams();
  useEffect(() => {
    const getBrandData = async () => {
      let data = await fetch(`/api/posts/${brandId}`).then(
        (resp) => resp.json()
      );
      let models = await data.map((entry) => entry.model);
      setModelList(models);
      if (modelFilter === "") {
        setBrandData(data);
      } else {
        const filteredData = data.filter(
          (entry) => entry.model === modelFilter
        );
        setBrandData(filteredData);
      }
    };
    getBrandData();
  }, [brandId, modelFilter]);
  return (
    <React.Fragment>
      <MainNavigation />
      <header className="brand-header">
        <h2>Brand: {brandId}</h2>
        <select
          style={{ textTransform: "uppercase" }}
          onChange={(ev) => {
            setModelFilter(ev.target.value);
          }}
        >
          <option value="">select model</option>
          {modelList.map((model) => (
            <option value={model} key={model}>
              {model}
            </option>
          ))}
        </select>
      </header>
      {/*<ModelDetails brandData={brandData} />*/}
    </React.Fragment>
  );
}

export default BrandPage;
