import NavBar from "./components/navBar"
import Table from "./components/table"
import Button from "./components/button"
import data from "./data/data"
import "./app.css"


const mainData = {...data}

 

const App = () =>{


    
    

    return(
        <div className="app-container"> 
        <div className="navBar">
            <NavBar />
        </div>
        <div className="table">
            <Table name={mainData.name} surname={mainData.surname} email={mainData.email}/>
        </div>
        <div className="btn">
            <Button/>
        </div>
        </div>
    )
}


export default App