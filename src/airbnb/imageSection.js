import React from "react";

const imageSection = (props) => {
  return (
    <div className="container">
      <div className="imageContainer start">
        <img src={`./imageSection/${props.img}.png`} alt="my image" />
        <div className="commentSection">
          <img
            src="./imageSection/star.jpeg"
            id="star"
            alt="still not working"
          />
          <span>{props.rate}</span>
          <p>({props.number})•</p>
          <p>{props.country}</p>
        </div>
        <p className="comment">{props.frase}</p>
          <span>from ${props.price}/person</span>
      </div>

      {/*<div className="imageContainer">
                <img src="./imageSection/two.png" alt="somenting"/>
                <p>some</p>
            </div>
            <div className="imageContainer end">
              <img src="./imageSection/three.png" alt="somenting"/>
                <p>medium</p>
    </div> */}
    </div>
  );
};

export default imageSection;
