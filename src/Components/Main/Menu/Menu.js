import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'
import './Menu.css'

export default function Menu(props) {
  return(
    <Fragment>
      <nav className="menuContent">
        <FontAwesomeIcon icon={faHome}/>
        <FontAwesomeIcon icon={faUser}/>

          <img src={iconGigaaa} onClick={(e) => props.pressOnVoice(e)} className="iconGigaaaVoice" alt=""/>

        <FontAwesomeIcon icon={faComment}/>
        <FontAwesomeIcon icon={faBorderStyle}/>
      </nav>
    </Fragment>
  )
}
