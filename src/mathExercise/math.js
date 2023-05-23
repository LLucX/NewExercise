import React from "react";

import text from "./text.js"

import  Jokes from "./jokes.js"


const mathPage = () =>{

    const jokesElements = text.map(txt=>{
        return < Jokes setup={txt.setup} punchline={txt.punchline}/>
    })

    /*const namesOfPeople = ["alice","bob","charlie","danielle"]
     const namesCaptlize = namesOfPeople.map(letter =>{
        return letter[0].toUpperCase() + letter.slice(1) + ","
    })*/

   // const colors = ["red","green","yellow","blue","orange"]
    

    return(
        <body>
            {jokesElements}
        </body>
    )
}



export default mathPage