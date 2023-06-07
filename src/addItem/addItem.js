import React, { useState } from "react";

{/*const addItem = () => {

    const thingsArray = ["thing1", "thing2","thing3"]

    const addItem = () =>{
      const thingsText = `thing ${thingsArray.length + 1}`
      thingsArray.push(thingsText)
    }

    console.log(thingsArray)

    let items = thingsArray.map(element => <p>{element}</p>)


  return (
    <body>
      <button onClick={addItem} >add item</button>
      <div className="containerP">
        {items}
      </div>
    </body>
  ); 
}; */}



{/*export default function App(){

  const [isImportant, setIsmportant] = useState("yes")

  const handleClick = () =>{
    setIsmportant("NO")
  }
  return(
    <div className="state">
      <h1 className="state-title">Is importan to know?</h1>
      <div onClick={handleClick} className="state-value">
        <h1>{isImportant}</h1>
      </div>
    </div>
  )
} */}


export default function App() {
  return (
    <div className="counter-main">
      <h1>0</h1>
      <div className="counter-buttons">
        <div className="counter">
          +
        </div>
        <div className="counter">
          -
        </div>
      </div>
    </div>
  )
}
