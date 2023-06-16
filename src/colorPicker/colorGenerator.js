import React, {useState} from "react";



const ColorGenerator = (props) =>{

        
return(
            <div style={{backgroundColor:randomColor}} className="box-pallets">
                {props.name}
            </div>      
)
}

export default ColorGenerator;



