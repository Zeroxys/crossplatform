import React, {Fragment} from 'react'

export default function ResetPasswordForm (props) {

    return(
        <Fragment>
            <form>
                <label htmlFor="username">E-mail</label>
                <input id="username" type="text"/>

                <input id="password" type={props.showPassword ? "text" : "password"}/>
                <input type="submit" value="Reset Password"></input>
            </form>

            <div className="newAccountContent">
                <span className="line"></span>
                <p>Return back to Log-in <span onClick={() => props.mountNewAcount()}><FontAwesomeIcon icon={faChevronRight}/> </span> </p>
            </div>

        </Fragment>
    )

}
