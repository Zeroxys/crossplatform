import React, {Component} from 'react';
import Menu from './Menu'
import './index.css'

export default class Main extends Component {
  constructor(props) {
    super()
  }


  render(){
    return (
    <div className="interfaceContent">
      <h1>
        Home
      </h1>
      <Menu></Menu>
    </div>
    )
  }

}
