import React, {useState} from "react";



const ColorGenerator = (props) =>{

    const [randomColor, setRandomColor] = useState(generateRandomColor());

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
    <div className="container-generator">
        <div className="container-pallets">
            <div style={{backgroundColor:randomColor}} className="box-pallets">
                {props.name}
            </div>
        </div>
        <button onClick={handleClick}>something</button>
    </div>
)
}

export default ColorGenerator;