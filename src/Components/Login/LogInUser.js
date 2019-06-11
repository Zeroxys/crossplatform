import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function LogInUser(props) {
    let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>
    return (
        <Fragment>
            <form>
                
                <label htmlFor="username">Username / Email</label>

                <input id="username" type="text" onChange={props.userSetLogIn}/>

                <label htmlFor="password">
                    Password 
                    <span className="passwordEye" onClick={(e) => props.setPassword(e)}>
                    {eyeIcon}
                    </span>
                </label>

                <input id="password" type={props.showPassword ? "text" : "password"} />
                <div className="checkContent">
                <input id="checkRemember" type="checkbox" name="Remember" value="Remember"/>
                <span className="checkmark"></span>
                <label htmlFor="checkRemember">Remember</label>
                </div>

                <input onClick={(e) => props.userLogIn(e)} type="submit" value="Sign In"></input>
            </form>

            <div className="newAccountContent">
            <span className="line"></span>
            <p onClick={ () => props.setForgotPassword() }>Forgot Your Password?</p>
            <p>New to gigaaa? Create New Account <span onClick={() => props.mountNewAcount()}><FontAwesomeIcon icon={faChevronRight}/> </span> </p>
            </div>

            
        </Fragment>
    )
}

