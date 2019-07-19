import React, {Component} from 'react'
import Menu from '../Main/Menu/Menu'
import Home from '../../../public/images/Home.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './index.css'

export default class AddHome extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="interfaceContent">

        <div className="homeContent">
            <img src={Home}></img>
            <button className="addHomeButton">+ Add Home</button>
        </div>

        <Menu/>
      </div>
    )
  }


}
