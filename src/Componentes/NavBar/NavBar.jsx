import '../NavBar/navbar.css'
import { TbWorld } from "react-icons/tb";
function NavBar() {
    return (
        <header >

            <div className='div-Padre'>
                <nav>
                    <ul>
                        <li>Create account</li>
                        <li><a href="/"></a>sign Up</li>
                        <li><TbWorld /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar