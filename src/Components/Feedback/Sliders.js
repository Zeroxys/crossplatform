import React, {useState, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './feedback.css'

export default function Sliders (props) {

    let [showArrow, setArrow] = useState(false)
    
    let chekboxs = props.checkContent.map( (el, i) => {
        return (
            <span style={{display:"block"}} key={i}>
                <input type="checkbox" value="" />
                <label>{el}</label>
            </span>
        )
    }) 

    let content = showArrow ?  <FontAwesomeIcon icon={faAngleUp} color="#292F58" size="1x"/> : <FontAwesomeIcon icon={faAngleDown} color="#292F58" size="1x"/> 
    let showContents = showArrow ? "block" : "none"

    return (
        <Fragment>
            
            <div className="titleContent" >
                <h4>{props.title}</h4>
                
                <span onClick={() =>  setArrow(true) }>
                    {content}
                </span>

            </div>

            <div className="checkContent" style={{display : showContents}} > 
                {chekboxs} 
            </div>

        </Fragment>
    )
} 
