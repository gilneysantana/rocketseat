import React, {useState} from 'react';

import './Login.css';
import logo from '../assets/gilney.PNG';

import api from '../services/api';

export default function Login({history}) {

    const [username, setUsername] = useState('');

    async function handleSubmit (e) {
        e.preventDefault() //envita o comportamento padrão (nesse caso, submeter o form)

        const response = await api.post('/devs', 
            {username});

        console.log(response);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="nao achei a figura." />
            <input
                placeholder= "Digite seu Github"
                value = {username}
                onChange = { e =>  setUsername(e.target.value) }
            />
            <button type="submit">Enviar</button>
            </form>
        </div>
    );
}