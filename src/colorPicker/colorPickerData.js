import React, {useState} from "react";


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


const colorPaletes = [
    {
        name:"one",
        color:"baseColor"
    },
    {
        name:"two",
        style:"second"
    },
    {
        name:"three",
        style:"third"
    },
    {
        name:"four",
        style:"fourth"
    },
    {
        name:"five",
        style:"fith"
    },
    {
        name:"six",
        style:"sithx"
    }
]


export default colorPaletes