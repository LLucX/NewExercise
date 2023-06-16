import React, {useState} from "react";
import ColorNav from "./colorNav";
import ColorScren from "./colorScreen"
import ColorGenerator from "./colorGenerator";
import ColorPick from "./colorPick";


const ColorPicker = () =>{
    return(
        <body>
            <ColorNav/>
            <ColorScren/>
            <ColorPick>
            <ColorGenerator/>
            </ColorPick>
        </body>
    )
}


export default ColorPicker


