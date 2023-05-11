import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import reportWebVitals from './reportWebVitals';
//import './Homepage';
//import Homepage from './Homepage';
import PageAirbnb from "./pageAirbnb"
import "./airBnb.css"
//import "./propsExercise/props.css"
//import Props from "./propsExercise/props"
//import ContactCat from "./contactCat/contact"
//import "./contactCat/contact.css"
//import MathPage from "./mathExercise/math"
//import "./mathExercise/math.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageAirbnb/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
