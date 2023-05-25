import React from "react";


const main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="form-section">
                    <form>
                        <div className="input-field">
                            <input type="text" placeholder="meme" />
                            <input type="text" placeholder="other meme" />
                        </div>
                        <button className="btn">Get a new image</button>
                    </form>
                </div>
                <div className="image-container">
                    <img src="./memeImage/memeOne.jpeg" alt="memePhoto" />
                </div>
            </div>
        </main>
    )
}


export default main