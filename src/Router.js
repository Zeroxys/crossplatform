import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App.js';
import Main from './Components/Main';
import Tips from './Components/Tips';

export default function Rooter () {
  return  (
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/user" exact component={Main} />
        <Route path="/Tips" exact component={Tips}/>
    </Router>
  )
}
