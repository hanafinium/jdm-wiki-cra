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
                                <td data-cell="dipsplacement">{engine.engineDisplacement}</td>
                                <td data-cell="horsepower">{engine.engineHP}</td>
                                <td data-cell="torque">{engine.engineTorque}</td>
                                <td data-cell="cylinders">{engine.cylinders}</td>
                                <td data-cell="configuration">{engine.engineConfiguration}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </React.Fragment>
        
    )
}

export default EngineDetails;