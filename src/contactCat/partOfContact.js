
import React from "react";

const contact = (props) =>{
    return(
        <div className="cat-container">
                <img src={props.img} alt="cat"/>
                <h2>{props.name}</h2>
                <div className="phone-contact">
                <img src="./contactImages/phone.png" alt="phone"/>
                <span>{props.phone}</span>
                </div>
                <div className="email-contact">
                <img src="./contactImages/email.png" alt="phone"/>
                <span>{props.email}</span>
                </div>
            </div>
    )
}


export default contact 