import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App.js';
import Main from './Components/Main';
import Tips from './Components/Tips';
import Device from './Components/Device';
import notFound from './Components/Pages/notFound'
import Welcome from './Components/Welcome/Welcome'

export default function Rooter () {

  if(!window.localStorage.getItem('welcome')) {
    console.log('firsttime')
    window.localStorage.setItem('welcome', true)

    return  <Router><Route path="/" exact component={Welcome} /></Router>
  } else {
    console.log('second time ')
    return  (
      <Router>
          <Route path="/" exact component={App} />
          <Route path="/welcome" exact component={App} />
          <Route path="/user" exact component={Main} />
          <Route path = "/user/device" component = { Device } />
          <Route path="/Tips" exact component={Tips}/>
          { /*<Route component={notFound} /> */ }
      </Router>
    )

  }



}
