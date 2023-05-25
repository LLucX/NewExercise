import React from "react";
import logoPosition from "./position.svg"


const card = (props) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.img}/>
            </div>
            <div className="card-description">
                <div className="card-location">
                    <img src={logoPosition} />
                    <p>{props.country}</p>
                    <a>View on Google Maps</a>
                </div>
                <h1>{props.name}</h1>
                <h3>{props.date}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default card