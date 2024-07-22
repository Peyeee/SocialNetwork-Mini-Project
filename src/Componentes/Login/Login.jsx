import './login.css'
import Img from '../../assets/goofy-dachshund.png'
import Gif from '../../assets/goofy-thoughtful-cat.gif'
import Img2 from '../../assets/goofy-smiling-monkey.png'
import { FaUser } from "react-icons/fa6";
import { BiShowAlt } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Main() {
    return (
        <div className='sectionContainer' id='login'>
            <section className='Login-Section'>
                <div className='Login-Section-Div-Padre'>
                    <div className='Div-top-SingIn'>
                        <span>Sign In</span>
                        <p>Hey, Enter your details to login
                            to your account</p>
                    </div>
                    <div className='Div-Mid-Data'>
                        <FaUser className='iconPerson' id='iconPerson' />
                        <input type="text" placeholder='Enter Email / Phone No' id='inputEmail' />
                        <BiShowAlt className='iconEye' />
                        <input type="text" placeholder='PassWord' />
                    </div>
                    <div className='Div-Bottom'>
                        <a href="/" id='Boton'>Sign in</a>
                        <span> -Or Sign In with- </span>
                        <div>
                            <div>
                                <FaGoogle />
                                <span>Google</span>
                            </div>
                            <div>
                                <FaMicrosoft />
                                <span>Microsoft</span>
                            </div>
                            <div>
                                <FaFacebook />
                                <span>Facebook</span>
                            </div>
                        </div>
                        <span>Don't have an account?</span><a href=""> Register Now?</a>
                    </div>
                </div>
            </section >
            <div className='img-container'>
                <img src={Img2} alt="" className='img' />
            </div>
        </div >
    )
}
export default Main;