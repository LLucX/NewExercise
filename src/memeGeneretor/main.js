import {useState} from "react";

import memeData from "./memesData"




const Main = () => {

  const [meme, setMeme] = useState({
    topTetx: "",
    bottomText: "",
    memeImamge: memeData[0].image
  })

  const [allMemmeImages, setMemmeImages] = useState(memeData)


    const getImage = ()=>{
        const memeArr = memeData
        const random = Math.floor(Math.random() * memeArr.length)
        const urlUpdated = memeArr[random].image
        setMeme(prev => ({
            ...prev,
            memeImamge: urlUpdated
        }))
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
                    <img src={meme.memeImamge} alt="memePhoto" />
                    <p className="two">AND TAKE MY MONEY</p>
                </div>
            </div>
        </main>
    )
}



export default Main