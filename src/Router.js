import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App.js'
import Main from './Components/Main'


export default function Rooter () {
  return  (
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/user" exact component={Main} />
    </Router>
  )
}
