import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png';
import voiceOff from '../../../../public/images/offline.png';
import devicesImage from '../../../../public/images/devices.png';
import { Offline, Online } from "react-detect-offline";
import './Menu.css'

let styles = {
  color : '#292F58'
}

export default function Menu(props) {
  return(
    <Fragment>
      <nav className="menuContent">
        <Link to = "/user">
          <FontAwesomeIcon  style={styles} icon={faHome}/>
        </Link>
        
        <FontAwesomeIcon style={styles} icon={faUser}/>

          <Offline><img src={voiceOff} className="iconGigaaaVoice" alt=""/></Offline>
          <Online>
            <img src={iconGigaaa} onClick={(e) => props.pressOnVoice(e)} className="iconGigaaaVoice" alt=""/>
          </Online>

        <FontAwesomeIcon style={styles} icon={faComment}></FontAwesomeIcon>

        <Link to = "/user/device/smart-home" className = "footer_link" >
          <img src = { devicesImage } className = "footer_icons"  />
        </Link>
      </nav>
    </Fragment>
  )
}
