import React, { useState } from "react";

  const AddItem = () => {
    
    const arryitem = ["thing1","thing2","thing3"]
    const [item, setItem] = useState(arryitem);
    const [num, setNum] = useState(4)

    const addItem = () =>{
      const newItem = "items"+num;
      setItem(prevItems => [...prevItems , newItem])
      setNum(prevNum => prevNum + 1 )
  
    }

  return (
    <body>
      <button onClick={addItem} >add item</button>
      <div className="containerP">
        {item.map((element,index)=>{
          return <div key={index} className="item">{index +1 +") " + element}</div>
        })}
      </div>
    </body>
  ); 
}


export default AddItem



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
} 



 export default function App() {

  const [count , setCount] = useState(0) 

  const add = () =>{
    setCount(function(preValue){
      return preValue + 1
    })
  } 

  const reduce = () =>{
    setCount(preValue => preValue - 1)
  } 


  

  return (
    <div className="counter-main">
      <h1>{count}</h1>
      <div className="counter-buttons">
        <div onClick={add} className="counter">
          +
        </div>
        <div onClick={reduce} className="counter">
          -
        </div>
      </div>
    </div>
  )
} */}
