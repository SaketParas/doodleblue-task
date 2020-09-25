import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Books from './Components/Books';
import Hoodie from './Components/Hoodie';
import Bags from './Components/Bags';
import Misc from './Components/Misc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/" component = {Home}/>
        <Route  path = "/Books" component = {Books}/>
        <Route  path = "/Hoodie" component = {Hoodie}/>
        <Route  path = "/Bags" component = {Bags}/>
        <Route  path = "/Misc" component = {Misc}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
