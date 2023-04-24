import React from 'react';
import { useEffect, useState } from 'react';
import MainNavigation from '../components/MainNavigation/MainNavigation.js';
import { useParams } from 'react-router-dom';

function Model() {
    const [modelData, setModelData] = useState({})
    const {brandId, modelId} = useParams();
    useEffect(()=>{
        const getModelData = async () =>{
            let data = await fetch(`http://localhost:5000/posts/${brandId}/${modelId}`).then((resp)=> resp.json())
            setModelData(data);
        }
        getModelData();
    },[brandId, modelId])
    return(
        <React.Fragment>
            <MainNavigation/>
            <p>{modelData.maker} {modelData.model}</p>
            <section>
                <h3>Technical Specifications</h3>
                <div>
                    <p>Displacement</p>
                    <p>Horsepower</p>
                    <p>Torque</p>
                    <p>Cylinders</p>
                    <p>Configuration</p>
                </div>
            </section>
            <div>
                <button disabled={true}>DELETE</button>
            </div>
        </React.Fragment>
    )
}

export default Model;