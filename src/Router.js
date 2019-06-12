import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App.js'
import Main from './Components/Main'
import Tips from './Components/Tips'
import Tips2 from './Components/Tips/Tips2'
import Tips3 from './Components/Tips/Tips3'
import Tips4 from './Components/Tips/Tips4'

export default function Rooter () {
  return  (
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/user" exact component={Main} />
        <Route path="/Tips" exact component={Tips} />
        <Route path="/Tips2" exact component={Tips2} />
        <Route path="/Tips3" exact component={Tips3} />
        <Route path="/Tips4" exact component={Tips4} />
    </Router>
  )
}
