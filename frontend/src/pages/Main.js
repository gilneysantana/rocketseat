import React from 'react';
import logo from '../assets/gilney.PNG';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Foto" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Note that the development build is not optimized.  To create a production build, use yarn build.</p>
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
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Foto" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Note that the development build is not optimized.  To create a production build, use yarn build.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Foto" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Note that the development build is not optimized.  To create a production build, use yarn build.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Foto" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Note that the development build is not optimized.  To create a production build, use yarn build.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}