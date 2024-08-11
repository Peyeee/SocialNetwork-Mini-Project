import './home.css';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
function Home({ tweets, setTweets }) {
    const [tweetText, setTweetText] = useState('');
    const tweetContainerRef = useRef(null);
    const location = useLocation();
    const [username, setUsername] = useState('');
    useEffect(() => {
        const getData = () => {
            return localStorage.getItem("username");
        };
        setUsername(getData());
    }, []);
    const displayTweets = location.pathname === '/home' ? tweets : [];
    const [pfp, setpfp] = useState(null)
    const getIMG = () => {
        return localStorage.getItem('pfp')
    }
    useEffect(() => {
        const imgsrc = localStorage.getItem('pfp')
        setpfp(getIMG());
    }, []);
    const handleTweet = () => {
        if (tweetText.trim() !== '') {
            getIMG();
            const newTweet = {
                text: tweetText,
                date: new Date().toLocaleTimeString(),
                tweeterName: username,
                imagen: pfp,
            };
            const updatedTweets = [...tweets, newTweet];
            setTweets(updatedTweets);
            // Guarda los tweets actualizados en localStorage
            localStorage.setItem("tweets", JSON.stringify(updatedTweets));
            setTweetText('');
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita el salto de línea en el textarea
            handleTweet(); // Llama a la función que maneja el tweet
        }
    };

    return (
        <>
            <NavBar texto="Home" otroTexto={<Link to='/mi-cuenta'>My account</Link>} />
            <div className="home-body-container" id='home-body-containerID'>
                <div className="home-body">
                    <div className="div-input">
                        <textarea
                            className="text-area"
                            id="textArea"
                            value={tweetText}
                            onChange={(e) => setTweetText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        ></textarea>
                    </div>
                    <div className="div-card-home">
                        <div className="div-button">
                            <button className="button-idea" id="btn" onClick={handleTweet}>New idea?</button>
                        </div>
                    </div>
                </div>
                <div ref={tweetContainerRef} className="tweet-container">
                    {displayTweets.map((tweet, index) => (
                        <div className="home-body-tweets" key={index}>
                            <p>{tweet.text}</p>
                            <p className="date">{tweet.date}</p>
                            <p className="usernameHome">{tweet.tweeterName}</p> {/* Mostrar el nombre de usuario */}
                            <img src={tweet.imagen} alt="Foto de perfil" className='pfpHome' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
