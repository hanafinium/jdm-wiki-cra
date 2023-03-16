import React from "react";
import { Link } from "react-router-dom";

function Brand() {
    return(
        <div>
            <ul>
                <li><Link to={`/posts/honda/s2000`}>S2000</Link></li>
            </ul>
        </div>
    )
}

export default Brand;