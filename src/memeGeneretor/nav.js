import React from "react";

import logoMeme from "./logoMeme.svg"


const navbar = () => {
    return (
        <nav>
            <div className="nav-image-container">
                <img src={logoMeme} alt="meme" />
                <h1>Memem generator</h1>
            </div>
        </nav>
    )
}


export default navbar;