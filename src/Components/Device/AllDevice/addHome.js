import React, {Component} from 'react'
import Menu from '../../Main/Menu/Menu.js'
import {useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import '../index.css'

const SomeComponent = withRouter( ({ location }) => {

  function getHistory(e) {
    const params = new URLSearchParams(location.search)

    if(params.get("group")) {


      console.log(params)
      console.log(params.get("group added"))
    }else {
      console.log(params)
      console.log(params.get("group sad :("))
    }
  }

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
                

                <Link to={{pathname: "/user/device/deviceGroups", search: `?group=${switcher}`}}>
                  <input className="groupButtonsConfirm" 
                      type="submit" 
                      style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} 
                      disabled={!switcher}
                      value="Continue"
                      onClick={ (e) => getHistory(e)} >
                  </input>
                </Link>

              </div>
          </form>

        <Menu/>
      </div>
    )
  }
)

export default SomeComponent
