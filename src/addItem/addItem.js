import React from "react";

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



export default function app(){
  return(
    <div className="state">
      <h1 className="state-title">Is importan to know?</h1>
      <div className="state-value">
        <h1>yes</h1>
      </div>
    </div>
  )
}
