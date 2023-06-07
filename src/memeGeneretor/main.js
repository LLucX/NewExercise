import React from "react";

import memeData from "./memesData"




const main = (props) => {


    const getImage = ()=>{
        const memeArr = memeData
        const random = Math.floor(Math.random() * memeArr.length)
        const urlUpdated = memeArr[random].image
        return urlUpdated
    }

   
    return (
        <main>
            <div className="main-container">
                <div className="form-section">
                    <div className="form">
                        <div className="input-field">
                            <input type="text" placeholder="meme" />
                            <input type="text" placeholder="other meme" />
                        </div>
                        <button onClick={getImage} className="btn">Get a new meme image  🖼</button>
                    </div>
                </div>
                <div className="image-container">
                    <p className="one">SHUT UP</p>
                    <img src="edf" alt="memePhoto" />
                    <p className="two">AND TAKE MY MONEY</p>
                </div>
            </div>
        </main>
    )
}



export default main