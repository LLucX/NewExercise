import React from "react";


const main = () => {

    const whenClicked = ()=>{
        return console.log("I was clicked")
    }

    console.log("I'm here")

    return (
        <main>
            <div className="main-container">
                <div className="form-section">
                    <div className="form">
                        <div className="input-field">
                            <input type="text" placeholder="meme" />
                            <input type="text" placeholder="other meme" />
                        </div>
                        <button onClick={whenClicked} className="btn">Get a new image</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src="./memeImage/memeOne.jpeg" alt="memePhoto" />
                </div>
            </div>
        </main>
    )
}


export default main