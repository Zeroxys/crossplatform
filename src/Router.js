import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App.js';
import Main from './Components/Main';
import Tips from './Components/Tips';
import AddHome from './Components/AddHome/addHome'
import AddGroup from './Components/AddHome/addGroup'
import Device from './Components/Device';
import Welcome from './Components/Welcome/Welcome'


export default function Rooter () {

  if(window.localStorage.getItem('welcome')) {
    
    //window.localStorage.setItem('welcome', false)
    return (
      <Router>
        <Route path="/" exact component={Welcome} />
      </Router>
    )

  } else {
    return  (
      <Router>
          <Route path="/" exact component={App} />
          <Route path="/welcome" exact component={App} />
          <Route path="/user" exact component={Main} />
          <Route path = "/user/device" component = { Device } />
          <Route path="/Tips" exact component={Tips}/>
          <Route path="/user/add-home" exact component={AddHome}/>
          <Route path = "/user/add-group" component = { AddGroup } />
      </Router>
    )

  }
}
