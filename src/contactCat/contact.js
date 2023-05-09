import React from "react";

import Contact from "./partOfContact.js"


const contactCat = () =>{
    return(
        <div className="contact-cat-body">
            < Contact
            img="./contactImages/one.jpeg"
            name="catOne"
            phone="(27)4548484484"
            email="emailOne@gmail.com"
            />
            < Contact
            img="./contactImages/two.jpeg"
            name="catTwo"
            phone="(27)123558554"
            email="emailtwo@gmail.com"
            />
            < Contact
            img="./contactImages/three.jpeg"
            name="catThree"
            phone="(27)523558554"
            email="emailThree@gmail.com"
            />
            < Contact
            img="./contactImages/four.jpeg"
            name="catFour"
            phone="(27)3558554"
            email="emailfour@gmail.com"  
            /> 
        </div>
    )
}

export default contactCat