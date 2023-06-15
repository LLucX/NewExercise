import React, {useState} from "react";
import ColorNav from "./colorNav";
import ColorScren from "./colorScreen"
import ColorGenerator from "./colorGenerator";


const ColorPicker = () =>{
    return(
        <body>
            <ColorNav/>
            <ColorScren/>
            <ColorGenerator/>
        </body>
    )
}


export default ColorPicker


