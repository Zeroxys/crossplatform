import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ResetPasswordForm (props) {

    let eyeIcon = props.showPassword ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>

    return(
        <Fragment>
            <form>
                <label htmlFor="username">E-mail</label>
                <input id="username" type="text"/>

                <input type="submit" value="Reset Password"></input>
            </form>

            <div className="newAccountContent">
                <span className="line"></span>
                <p>Return back to Log-in <span onClick={() => props.mountNewAcount()}><FontAwesomeIcon icon={faChevronRight}/> </span> </p>
            </div>

        </Fragment>
    )

}
