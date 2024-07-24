import '../NavBar/navbar.css';
import { TbWorld } from "react-icons/tb";

function NavBar() {
    return (
        <header>
            <div className='div-Padre'>
                <nav>
                    <ul>
                        <li className='Li_Create'><a href="">Create account</a></li>
                        <li className='Li_SignUp'><a href="/">sign Up</a></li>
                        <li className='Li_World'><a href=""><TbWorld /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
