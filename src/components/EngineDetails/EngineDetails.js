import React from 'react';

function EngineDetails(props) {
    return(
        <React.Fragment>
            {props.details.map((engine)=> {
                return(
                    <table key={engine.engineCode}>
                        <thead>
                            <tr>
                                <th>Displacement (CC)</th>
                                <th>Horsepower</th>
                                <th>Torque (NM)</th>
                                <th>Cylinders</th>
                                <th>Configuration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{engine.engineDisplacement}</td>
                                <td>{engine.engineHP}</td>
                                <td>{engine.engineTorque}</td>
                                <td>{engine.cylinders}</td>
                                <td>{engine.engineConfiguration}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </React.Fragment>
        
    )
}

export default EngineDetails;