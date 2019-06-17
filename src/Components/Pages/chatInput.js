import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

export default function chatInput (props) {

    console.log(props.onChange)

    return (
        <form className="chatInput">
            <div className="formTypeHere">

                <input placeholder="Type here..." defaultValue={props.text}/>
                
                <div>
                    <input style={{backgroundColor : 'transparent'}} type="button" value=""></input>
                    <FontAwesomeIcon icon={faChevronRight} color="red" size="1x"/>
                </div>
            </div>
        </form>
    )
}

