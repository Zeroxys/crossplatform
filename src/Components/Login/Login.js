import React from 'react';
import './Login.css';

export default function LoginForm() {
  return <div className="loginForm">
    <form>
      <label for="username">Username / Email</label>
      <input id="username" type="text"/>

      <label for="password">Password</label>
      <input id="password" type="text"/>

      <label for="checkRemember">Remember</label>
      <input id="checkRemember" type="checkbox" name="Remember" value="Remember"/>
      

    </form>    
  </div>
}
