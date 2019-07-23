import React, {Component} from 'react'
import Menu from '../../Main/Menu/Menu'
import Home from '../../../../public/images/Home.png'
import { Link } from 'react-router-dom'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../index.css'

export default class AddHome extends Component {

  constructor(props){
    super(props)
  }

  render() {

    console.log(this.props.location.search)
    let params = new URLSearchParams(this.props.location.search)
    console.log(params.get('group'))

    let getParam = params.get('group')

    return (
      <div className="">


        <div className="homeContent">
            <img src={Home}></img>
            <button className="addHomeButton">
              { <Link style = { { color: '#fefefe' } } to = "/user/device/addHome">+ Add Home</Link> }
            </button>
        </div>
      </div>
    )
  }


}
