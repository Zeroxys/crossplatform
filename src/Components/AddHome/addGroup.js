import React, {Component} from 'react'
import Menu from '../Main/Menu/Menu'
import {useState} from 'react'
import './index.css'

export default function AddHome (){

  const [ switcher, setSwitcher ] = useState(false);

    let isTrue = switcher ? '#292F58' : '#A6A8BA'

    return (
      <div className="interfaceContent">

          <h1 className="addHome">Add Home</h1>

          <form className="addGroupForm">
              <label style={{color : '#A6A8BA'}} htmlFor="add">Name</label>
              <input id="add" onChange = {e => setSwitcher(e.target.value)} type="text" style={{color: isTrue}} placeholder="House Name"></input>

              <div className="buttonsContent">
                <input className="groupButtons" type="submit" value="Cancel"></input>
                <input className="groupButtonsConfirm" type="submit" style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} disabled={!switcher} value="Continue"></input>
              </div>
          </form>


        <Menu/>
      </div>
    )


}
