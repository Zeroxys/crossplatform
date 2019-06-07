import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function NewUser(props) {

    let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>

    return(
        <form>

            <label htmlFor="username">Name Surname</label>
            <input id="username" type="text"/>

            <label htmlFor="username">E-mail</label>
            <input id="username" type="text"/>

            <label htmlFor="password">
                Password 
                <span className="passwordEye" onClick={(e) => props.setPassword(e)}>
                {eyeIcon}
                </span>
            </label>
            <input id="password" type={props.showPassword ? "text" : "password"}/>
            <input type="submit" value="Create New Account"></input>

        </form>
    )
}
