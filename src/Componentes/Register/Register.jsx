import Main from '../Login/Login';
import '../Register/register.css'
import Img from '../../assets/goofy-dachshund.png'
import Gif from '../../assets/goofy-thoughtful-cat.gif'
import Img2 from '../../assets/goofy-smiling-monkey.png'
import { FaUser } from "react-icons/fa6";
import { BiShowAlt } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar'

function Register(props) {
    const changeType = () => {
        const input = document.getElementById('inputPassword');
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }


    const iconEye = document.getElementById("iconEye")


    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const spanError = document.createElement("span");
    const div = document.getElementById("Div-Mid-Data")
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[_!]).{1,}$/;
        if (password === '') {
            setError("Por favor, ingrese una contraseña");
        } else if (!regex.test(password)) {
            console.log('Por favor, ingrese una contraseña con mayúscula, minúscula, un número y un carácter especial.')
            setError("Por favor, ingrese una contraseña con mayúscula, minúscula, un número y un carácter especial.");;
        } else {
            navigate('/home');
        }


    };


    const inputPassword = useRef(null);
    const [passWordHide, setpasswordHide] = useState(true)

    const handlePasswordHide = () => {
        setpasswordHide(!passWordHide);
        if (inputPassword.current) {
            inputPassword.current.type = passWordHide ? 'text' : 'password';
        }
    };

    return (
        <>
            <NavBar texto={<Link to={'/'}>Login</Link>} otroTexto="Create Account   " />

            <div className="login-body">
                <div className='sectionContainer sectionContainerRegister' id='login'>
                    <section className='Login-SectionRegiser'>
                        <div className='Login-Section-Div-Padre Login-Section-Div-PadreRegister'>
                            <div className='Div-top-SingIn'>
                                <span>Register {props.register}</span>
                                <p>Hey, Enter your details to create your account</p>
                            </div>
                            <div className='Div-Mid-Data'>
                                <FaUser className='iconPerson IconPersonRegister' id='iconPerson' />
                                <input type="text" placeholder='Enter UserName' id='inputEmail' />
                                <input type="text" placeholder='Enter Email / Phone No' id='inputEmail' />
                                <input type="text" placeholder='Password' id='inputEmail' />
                                <input placeholder='Repeat Password' value={password} onChange={handlePasswordChange} ref={inputPassword} />
                                {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
                            </div>
                            <div className='Div-Bottom'>
                                <button id='Boton' onClick={handleSubmit} className='buttonSign'>Sign in</button>
                                <span > -Or Sign In with- </span>
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
                                <span>Already have an account?</span><Link to={'/'}>Log In</Link>
                            </div>
                        </div>
                    </section >
                    <div className='img-container'>
                        <img src={Img2} alt="" className='img' />
                    </div>
                </div >
            </div>
        </>
    )
}


export default Register