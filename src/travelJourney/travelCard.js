import React from "react";
import logoPosition from "./position.svg"


const card = () => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src="./travelJorney/travelOne.jpeg" />
            </div>
            <div className="card-description">
                <div className="card-location">
                    <img src={logoPosition} />
                    <p>JAPAN</p>
                    <a>View on Google Maps</a>
                </div>
                <h1>Monte fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}

export default card