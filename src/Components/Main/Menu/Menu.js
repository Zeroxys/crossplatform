import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'
import devicesImage from '../../../../public/images/devices.png'
import './Menu.css'


let styles = {
  color : '#292F58'
}

export default function Menu(props) {
  return(
    <Fragment>
      <nav className="menuContent">
        <FontAwesomeIcon  style={styles} icon={faHome}/>
        <FontAwesomeIcon style={styles} icon={faUser}/>

          <img src={iconGigaaa} onClick={(e) => props.pressOnVoice(e)} className="iconGigaaaVoice" alt=""/>

        <FontAwesomeIcon style={styles} icon={faComment}></FontAwesomeIcon>

        <img style={{width : '5%'}} src={devicesImage} onClick={(e) => props.pressOnVoice(e)} className="" alt=""/>
      </nav>
    </Fragment>
  )
}
