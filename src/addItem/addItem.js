import React from "react";

const addItem = () => {

    const thingsArray = ["thing1", "thing2","thing3"]

    const getItem = () =>{
         const Item =  thingsArray.map(element => <p>element</p>)
         return Item
    }

  return (
    <body>
      <button onClick={}>add item</button>
      <p>{item}</p>
    </body>
  );
};

export default addItem
