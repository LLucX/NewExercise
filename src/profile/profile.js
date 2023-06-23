import React, {useState} from "react";
import logoProfile from "./profileLogo.svg"
import starLogo from "./starLogo.svg"


const Profile = () =>{





return(
    <body>
        <div className="card-container">
            <div className="profile-container" >
                <img src={logoProfile} alt="logoProfile"/>
            </div>
            <img src={starLogo} alt="star"/>
            <h3> name surname </h3>
            <p>(27)551845114</p>
            <p>email@Something.com</p>
        </div>
    </body>
)




}


export default Profile