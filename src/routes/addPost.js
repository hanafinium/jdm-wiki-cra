import React from 'react';
import { useState } from 'react';
import MainNavigation from '../components/mainNavigation/MainNavigation.js';

function AddPost() {
    const [maker, setMaker] = useState("")
    const [model, setModel] = useState("")
    const [modelCode, setModelCode] = useState("");
    const [engineCode, setEngineCode] = useState("")
    const [engineDisplacement, setEngineDisplacement] = useState("")
    const [engineHP, setEngineHP] = useState("")
    const [engineTorque, setEngineTorque] = useState("")
    const [cylinders, setCylinders] = useState("")
    const [engineConfiguration, setEngineConfiguration] = useState("")

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        await fetch(`http://localhost:5000/posts/add`, {method: 'POST', headers: {"content-type": "application/json"}, body: JSON.stringify({maker, model, modelCode, engine: [{engineCode, engineDisplacement, engineHP, engineTorque, cylinders, engineConfiguration}]})}).then(res=> res.json());

        setMaker("");
        setModel("");
        setModelCode("")
        setEngineCode("");
        setEngineDisplacement("");
        setEngineHP("");
        setEngineTorque("");
        setCylinders("")
        setEngineConfiguration("");
        
        setTimeout(()=>{
            window.location = "http://localhost:3000/"
        },3000)
    }
    return(
        <React.Fragment>
            <MainNavigation/>
            <form className='add-form'>
                <p className='medium-font'>Add New Entry</p>
                <div>
                    <label>Select a Maker:</label>
                    <br/>
                    <select name='makers' onChange={(ev)=>setMaker(ev.target.value)}>
                        <option value="">--Select Maker--</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="mitsubishi">Mitsubishi</option>
                        <option value="nissan">Nissan</option>
                    </select>
                </div>
                <div>
                    <label>Model: </label>
                    <div className='form-sections'>
                        <input type="text" name='model-name' id='model-input' placeholder='model name' value={model} onChange={(ev)=>setModel(ev.target.value)}></input>
                        <input type="text" name='model-code' id='model-input' placeholder='model code' value={modelCode} onChange={(ev)=>setModelCode(ev.target.value)}></input>
                    
                    </div>
                </div>
                <div>
                    <label>Engine details: </label>
                    <div className='form-sections'>
                        <input type="text" name='code' id='code-input' placeholder='engine code' value={engineCode} onChange={(ev)=> setEngineCode(ev.target.value)}></input>
                        <input type="number" name='displacement' id='disp-input' placeholder='displacement' value={engineDisplacement} onChange={(ev)=> setEngineDisplacement(ev.target.value)}></input>
                        <input type="number" name='horsepower' id='hp-input' placeholder='horsepower' value={engineHP} onChange={(ev)=> setEngineHP(ev.target.value)}></input>
                        <input type="number" name='torque' id='torque-input' placeholder='torque' value={engineTorque} onChange={(ev)=> setEngineTorque(ev.target.value)}></input>
                        <input type="number" name='cylinders' id='cylinders-input' placeholder='cylinders' value={cylinders} onChange={(ev)=> setCylinders(ev.target.value)}></input>
                        <select name='configuration' id='config-input' value={engineConfiguration} onChange={(ev)=>setEngineConfiguration(ev.target.value)}>
                            <option value="">--Select Config--</option>
                            <option value="straight">inline</option>
                            <option value="v-shape">v-shape</option>
                            <option value="w-shape">w-shape</option>
                        </select>
                    </div>
                </div>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default AddPost;