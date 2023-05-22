import React from "react";

import Contact from "./partOfContact.js"

import catData from "./catData.js"


const contactCat = () => {

    const elementData = catData.map((ele,index) => {

        const id = index + 1;
        return < Contact 
        img={ele.img} 
        name={ele.name} 
        phone={ele.phone}
        email={ele.email} 
        sold={ele.sold}
        key={id}/>
    })

    return (
        <div className="contact-cat-body">

            {elementData}

        </div>

    )
}


export default contactCat