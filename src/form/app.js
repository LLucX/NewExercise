import NavBar from "./components/navBar"
import Table from "./components/table"
import "./app.css"
import {useState} from "react"

 

const App = () =>{

    

    return(
        <div className="app-container"> 
        <div className="navBar">
            <NavBar />
        </div>
        <div className="table">
            <Table/>
        </div>
        </div>
    )
}


export default App