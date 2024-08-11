import './login.css';
import Img2 from '../../assets/Img/goofy-relaxed-goat.png';
import { FaUser } from "react-icons/fa6";
import { BiShowAlt } from "react-icons/bi";
import { FaGoogle, FaMicrosoft, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar';
function Main({ setUsername }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const inputPassword = useRef(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        if (inputPassword.current) {
            inputPassword.current.type = passwordVisible ? 'text' : 'password';
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[_!]).{1,}$/;
        if (password === '') {
            setError("Por favor, ingrese una contraseña");
        } else if (!regex.test(password)) {
            setError("Por favor, ingrese una contraseña con mayúscula, minúscula, un número y un carácter especial.");
        } else {
            localStorage.setItem("username", inputValue); // Almacenar el nombre de usuario en el localStorage
            navigate('/home'); // Navegar a la página de inicio
        }
    };
    return (
        <>
            <NavBar texto="Create Account" otroTexto="Register" />
            <div className="login-body">
                <div className='sectionContainer' id='login'>
                    <section className='Login-Section'>
                        <div className='Login-Section-Div-Padre'>
                            <div className='Div-top-SingIn'>
                                <span>Sign In</span>
                                <p>Hey, Enter your details to login to your account</p>
                            </div>
                            <div className='Div-Mid-Data'>
                                <FaUser className='iconPerson' id='iconPerson' />
                                <input
                                    type="text"
                                    placeholder='UserName'
                                    id='inputEmail'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <BiShowAlt className='iconEye' id='iconEye' onClick={togglePasswordVisibility} />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={handlePasswordChange}
                                    ref={inputPassword}
                                />
                                {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
                            </div>
                            <div className='Div-Bottom'>
                                <button id='Boton' onClick={handleSubmit} className='buttonSign'>Sign in</button>
                                <span> -Or Sign In with- </span>
                                <div>
                                    <div className='cardsSocialMedias'>
                                        <FaGoogle className='iconsSocialMedia' />
                                        <span>Google</span>
                                    </div>
                                    <div className='cardsSocialMedias'>
                                        <FaMicrosoft className='iconsSocialMedia' />
                                        <span>Microsoft</span>
                                    </div>
                                    <div className='cardsSocialMedias'>
                                        <FaFacebook className='iconsSocialMedia' />
                                        <span>Facebook</span>
                                    </div>
                                </div>
                                <span>Don't have an account?</span><Link to={'/register'}>Register Now?</Link>
                            </div>
                        </div>
                    </section>
                    <div className='img-container'>
                        <img src={Img2} alt="" className='img' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
