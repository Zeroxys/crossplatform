import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App.js'


export default function Rooter () {
  return  (
    <Router>
        <Route path="/" exact component={App} />
    </Router>
  )
}
