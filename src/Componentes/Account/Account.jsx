import '../Account/account.css'
import '../Account/account.css'
import { Link } from 'react-router-dom';
// import img from '../1050-200x200.jpg'
import { MdAddToPhotos } from "react-icons/md";
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import IMG from '../../assets/Img/1050-200x200.jpg'
import NavBar from '../NavBar/NavBar'




function MyAccount() {

    const [follow, setFollow] = useState(false)
    const buttonRef = useRef(null);
    const followRef = useRef(null)
    const followRefButton = useRef(null)

    const one = 1
    parseInt(one)

    const handleFollow = () => {
        setFollow(!follow)
        if (follow === true) {
            followRefButton.current.innerText = "follow"
            followRef.current.innerText--
        } else {
            followRefButton.current.innerText = "followed"

            followRef.current.innerText++
        }
    }

    const [imagen, setImagen] = useState(null);
    const fileInputRef = useRef(null);

    const handlePFP = (e) => {
        const IMGPFP = e.target.src
        setPfp(pfp)
    }
    const handleButtonClick = () => {
        fileInputRef.current.click();
        localStorage.setItem("pfp", imagen)
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagen(URL.createObjectURL(file));
        }
    };
    const [username, setUsername] = useState('');
    const getData = () => {
        return localStorage.getItem("username")
    }
    useEffect(() => { setUsername((getData));[] })
    //!Foto de perfil

    const [pfp, setPfp] = useState(null);

    const savepfp = () => { }

    return (
        <>
            <NavBar texto={<Link to='/home'>Home</Link>} otroTexto={<Link to='/mi-cuenta'>My account</Link>} />

            <div className='Body-Container_Account'>
                <div className='pruebaPrimera'>
                    <img alt="" className='imagenPpt' />
                    {imagen && <img src={imagen} alt="profile picture" className='imagenPpt' />}
                </div>
                <div className='Body-Container_Account-edit'>
                    <div className='Prueba'>
                        <div className='Body-Container_Account-Name'>
                            <h3 className='Body-Container_Account-h3' >{username}</h3>
                            <button class="ButtonImg" onClick={handleButtonClick}><MdAddToPhotos className='iconPhoto' /></button>
                        </div>
                        <div className='Body-Container_Account-Followers'>
                            <span className='span Followers' >Followers: <span ref={followRef}> 783</span></span>
                            <span className='span Follows'>Follows: 346</span>
                            <span className='span Likes'>Likes: 128736</span>
                        </div>
                        <div className='Body-Container_Account-Biography'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut itaque debitis ratione sunt, ut nobis, eius quod facere quis voluptatum porro dolores labore? Culpa obcaecati numquam aspernatur eius iusto?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum tempore unde sequi quis corporis saepe cum ad alias quod mollitia sunt maxime laudantium, quia perspiciatis a voluptas, rerum molestiae omnis.lorem
                                Lorem ipsum dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut itaque debitis ratione sunt, ut nobis, eius quod facere quis voluptatum porro dolores labore? Culpa obcaecati numquam aspernatur eius iusto?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum tempore unde sequi quis corporis saepe cum ad alias quod mollitia sunt maxime laudantium, quia perspiciatis a voluptas, rerum molestiae omnis.lorem
                                Lorem ipsum dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut itaque debitis ratione sunt, ut nobis, eius quod facere quis voluptatum porro dolores labore? Culpa obcaecati numquam aspernatur eius iusto?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum tempore unde sequi quis corporis saepe cum ad alias quod mollitia sunt maxime laudantium, quia perspiciatis a voluptas, rerum molestiae omnis.lorem
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam aliquid a ab numquam delectus assumenda reprehenderit natus! Delectus nihil doloremque culpa, illo in hic esse fugit itaque adipisci nisi!                    </p>
                        </div>
                        <div className='DivButton'>
                            {/* <button ref={buttonRef} class="btn btn-shadow btn-shadow--purple" onClick={handleFollow}> <span ref={followRefButton}>Follow</span> </button> */}
                        </div>
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
        </>
    )
}

export default MyAccount;