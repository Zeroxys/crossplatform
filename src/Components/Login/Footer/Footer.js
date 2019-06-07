import React from 'react'
import iconGigaaa from '../../../../public/images/gigaaalogoIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

export default function Footer (props){

    let showArrow = props.showArrowLogin ? <FontAwesomeIcon icon={faChevronRight} color="white" size="2x"/> : null

    return(
        <div className="footerContent">
            <div className="iconContainer" onClick={() => props.showArrow()}>
                <img src={iconGigaaa} className="iconGigaaa" alt=""/>
            </div>
            <div className={ props.showArrowLogin ? "arrowIcon" : ""} onClick={ () => props.showLoginForm() }>
                {showArrow}
            </div>
        </div>
    )

}

