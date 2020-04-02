import React from 'react';

import './Login.css';
import logo from '../assets/gilney.PNG';

export default function Login() {
    return (
        <div className="login-container">
            <form>
            <img src={logo} alt="nao achei a figura." />
            <input
                placeholder= "Digite seu Github"
            />
            <button type="submit">Enviar</button>
            </form>
        </div>
    );
}