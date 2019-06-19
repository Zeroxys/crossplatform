import React from 'react';
import iconGigaaa from '../../../public/images/gigaaalogoIcon.png';
import iconGigaaOffline from '../../../public/images/offline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Offline, Online } from "react-detect-offline";
import './Footer.css';

export default function Footer (props){

    let showArrow = props.showArrowLogin ? <FontAwesomeIcon icon={faChevronRight} color="white" size="2x"/> : null
    
    return(
        <div className="footerContent">
            <div className="iconContainer" onClick={() => props.showArrow()}>

                <Offline><img src={iconGigaaOffline} className="iconGigaaa" alt=""/></Offline>
                <Online><img src={iconGigaaa} className="iconGigaaa" alt=""/></Online>

            </div>
            <div className={ props.showArrowLogin ? "arrowIcon" : ""} onClick={ () => props.showLoginForm() }>
                {showArrow}
            </div>
        </div>
    )

}

