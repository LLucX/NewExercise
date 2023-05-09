import React from "react";


const propsName = () =>{
    
    const date = new Date()
    const hours = date.getHours() % 24
    
    const returnTime = () =>{
        if (hours < 12){
            return "morning"
        } else if (hours >= 12 && hours < 17){
            return "afternoon"
        } else{
            return "night"
        }
    }
    return(
        <h1>Hi is {returnTime()}</h1>
    )
}


export default propsName