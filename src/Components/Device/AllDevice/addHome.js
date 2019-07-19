import React, {Component} from 'react'
import Menu from '../../Main/Menu/Menu.js'
import {useState} from 'react'
import '../index.css'

import {withRouter} from 'react-router-dom'

/*function addHouse(e, props) {
  e.preventDefault();

  console.log(props)

  console.log(e.target.value);
  window.location = `/user/device/smart-home/${e.target.value}`
  history.push('/my-new-location')

}

export default function AddHome ( {history} ){

  console.log(history)

  //console.log('props -->', props)
  //console.log('context --->',context)

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
                <input className="groupButtonsConfirm" type="submit" style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} disabled={!switcher} onClick={ (e) => history.push('/user/device/addHome?asdsd=sd') }></input>
              </div>
          </form>


        <Menu/>
      </div>
    )


}*/


const SomeComponent = withRouter( ({ history }) => {
  
  console.log(history)

  const params = new URLSearchParams('?sort=asdas')

  console.log('params -->',params)



  //console.log('props -->', props)
  //console.log('context --->',context)

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
                <input className="groupButtonsConfirm" type="submit" style={{color: switcher ? '#fefefe': '#A6A8BA', background: switcher ? '#292F58' : '#F4F4F6'}} disabled={!switcher} onClick={ (e) => history.push('/user/device/smart-home/?asdsad=asdasd') }></input>
              </div>
          </form>


        <Menu/>
      </div>
    )
  }
)

export default SomeComponent
