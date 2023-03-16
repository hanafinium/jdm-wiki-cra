import React from 'react';
import { Link } from 'react-router-dom';

function Model() {
    return(
        <div>Model Page
            <ul>
                <li><Link to={`posts/honda/s2000`}>Honda</Link></li>
            </ul>
        </div>
    )
}

export default Model;