import React from "react";

const imageSection = () =>{
    return(
        <div className="container">
            <div className="imageContainer start">
                <img src="./imageSection/one.png" alt="still not working"/>
                <img src="./imageSection/star.jpeg" id="star" alt="still not working"/>
                <span>05</span>
            </div>
            <div className="imageContainer">
                <img src="./imageSection/two.png" alt="somenting"/>
                <p>some</p>
            </div>
            <div className="imageContainer end">
              <img src="./imageSection/three.png" alt="somenting"/>
                <p>medium</p>
            </div>
        </div>
    )
}

export default imageSection