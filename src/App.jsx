// import {Routes, Route} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";


import React from 'react';


async function App(){
 try{
  const reponseJSON = await fetch("https://dummyjson.com/products");
  console.log(reponseJSON, "reponseJSON");

  // Je transforme en JS
  const reponseJS = await reponseJSON.json();
  console.log(reponseJS);

    
 }


 catch (error) {
    console.log(error, "error");
  }

}

export default App;
