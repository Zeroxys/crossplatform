import React from 'react'

export default function ResetPasswordForm () {

    return(
        <form>

            <label htmlFor="username">E-mail</label>
            <input id="username" type="text"/>

            <input id="password" type={props.showPassword ? "text" : "password"}/>
            <input type="submit" value="Reset Password"></input>
        </form>
    )

}
