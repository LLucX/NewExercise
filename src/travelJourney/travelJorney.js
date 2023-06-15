import React from "react";

import logo from "./logo.svg"

import Card from "./travelCard.js";

import travelData from "./travelJorneyData";


const component = travelData.map(comp =>{
    return < Card {...comp}/>
})




const travelJorney = () => {
    return (
        <body>
            <nav>
                <img src={logo} alt="logo"/>
                <p>my travel journal.</p>
            </nav>

            <main>
                {component}
            </main>

        </body>
    )
}


export default travelJorney