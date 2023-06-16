import React, {useState} from "react";



const ColorGenerator = (props) =>{

    const [randomColor, setRandomColor] = useState("black");

  function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  function handleClick() {
    const newRandomColor = generateRandomColor();
    setRandomColor(newRandomColor);
  }

        
return(
            <div style={{backgroundColor:randomColor}} className="box-pallets">
                {props.name}
            </div>      
)
}

export default ColorGenerator;



