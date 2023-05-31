import React from "react";


const main = () => {

    const whenClicked = ()=>{
        return console.log("I was clicked")
    }

    console.log("I'm here")

    const handClick = () =>{
        return console.log("oi estou aqui")
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
                        <button className="btn">Get a new image</button>
                    </form>
                </div>
                <div className="image-container">
                    <p className="one">SHUT UP</p>
                    <img src="./memeImage/memeOne.jpeg" alt="memePhoto" />
                    <p className="two">AND TAKE MY MONEY</p>
                </div>
            </div>
        </main>
    )
}


export default main