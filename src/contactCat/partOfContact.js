
import React from "react";

const contact = (props) =>{
    
    return(
        <div className="cat-container">
                {props.sold === 0 && <span>soldOut</span>}
                <img src={props.img} alt="cat"/>
                <div className="buy-section">
                <h2>{props.name}</h2>
                {props.sold !== 0 && <p>get it now!</p>}
                </div>
                <div className="phone-contact">
                <img src="./contactImages/phone.png" alt="phone"/>
                <p>{props.phone}</p>
                </div>
                <div className="email-contact">
                <img src="./contactImages/email.png" alt="phone"/>
                <p>{props.email}</p>
                <h4>{props.id}</h4>
                </div>
            </div>
    )
}


export default contact 