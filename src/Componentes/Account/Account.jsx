import '../Account/account.css';
import { Link } from 'react-router-dom';
import { MdAddToPhotos } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar';
function MyAccount() {
    const [follow, setFollow] = useState(false);
    const buttonRef = useRef(null);
    const followRef = useRef(null);
    const followRefButton = useRef(null);
    const handleFollow = () => {
        setFollow(!follow);
        if (follow) {
            followRefButton.current.innerText = "Follow";
            followRef.current.innerText--;
        } else {
            followRefButton.current.innerText = "Followed";
            followRef.current.innerText++;
        }
    };
    const [imagen, setImagen] = useState(null);
    const fileInputRef = useRef(null);
    // Maneja la selección de archivo y almacena la URL de la imagen
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImagen(imageURL);
            localStorage.setItem('pfp', imageURL); // Almacena la URL en localStorage
        }
    };
    // Carga la imagen almacenada en localStorage cuando el componente se monta
    useEffect(() => {
        const storedImage = localStorage.getItem('pfp');
        if (storedImage) {
            setImagen(storedImage);
        }
    }, []);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    return (
        <>
            <NavBar texto={<Link to='/home'>Home</Link>} otroTexto={<Link to='/mi-cuenta'>My account</Link>} />
            <div className='Body-Container_Account'>
                <div className='pruebaPrimera'>
                    {imagen && <img src={imagen} alt="Profile" className='imagenPpt' />}
                </div>
                <div className='Body-Container_Account-edit'>
                    <div className='Prueba'>
                        <div className='Body-Container_Account-Name'>
                            <h3 className='Body-Container_Account-h3'>{username}</h3>
                            <button className="ButtonImg" onClick={handleButtonClick}>
                                <MdAddToPhotos className='iconPhoto' />
                            </button>
                        </div>
                        <div className='Body-Container_Account-Followers'>
                            <span className='span Followers'>
                                Followers: <span ref={followRef}>783</span>
                            </span>
                            <span className='span Follows'>Follows: 346</span>
                            <span className='span Likes'>Likes: 128736</span>
                        </div>
                        <div className='Body-Container_Account-Biography'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut itaque debitis ratione sunt, ut nobis...</p>
                        </div>
                        <div className='DivButton'>
                            <button ref={buttonRef} className="btn btn-shadow btn-shadow--purple" onClick={handleFollow}>
                                <span ref={followRefButton}>Follow</span>
                            </button>
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
    );
}

export default MyAccount;
