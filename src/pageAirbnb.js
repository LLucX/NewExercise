import React from "react";
import Navbar from "./airbnb/navbar"
import Main from "./airbnb/main"
import ImageSection from "./airbnb/imageSection"



const airBnbPage = () =>{
    return(
        <body>
            <Navbar/>
            <Main/>
            <ImageSection/> 
        </body>
    )
}

export default airBnbPage