import React, { useEffect, useState } from 'react';
import api from '../services/api';
import logo from '../assets/gilney.PNG';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    //essa funcao sera invocada sempre que o id do usuario logado mudar 
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map((user) => (
                    <li>
                        <img src={user.avatar} alt={user.avatar}/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike" className="button-like" />
                            </button>
                            <button type="button">
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}