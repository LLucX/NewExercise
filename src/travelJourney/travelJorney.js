import React from "react";

import logo from "./logo.svg"

import Card from "./travelCard.js";








const travelJorney = () => {
    return (
        <body>
            <nav>
                <img src={logo} alt="logo"/>
                <p>my travel journal.</p>
            </nav>

            <main>
                <Card />
            </main>

        </body>
    )
}


export default travelJorney