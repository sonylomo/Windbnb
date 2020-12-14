import React from 'react'
import './App.css'
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Components/Home'
import Header from './Components/Header'

// const AppRoutes= () =>{
//   return(
//     <Switch>
//       <Route path='/' exact component={Home} />
//     </Switch> 
//   )
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
