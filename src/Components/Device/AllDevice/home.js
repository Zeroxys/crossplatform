import React, {Component} from 'react'
import Menu from '../../Main/Menu/Menu'
import Home from '../../../../public/images/Home.png'
import { Link } from 'react-router-dom'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../index.css'

export default class AddHome extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="">


        <div className="homeContent">
            <img src={Home}></img>
            <button className="addHomeButton">
              
              <Link style = { { color: '#fefefe' } } to = "/user/device/addHome">+ Add Home</Link>
              
            </button>
        </div>
      </div>
    )
  }


}
