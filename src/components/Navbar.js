import React ,{useEffect,useState} from 'react';
import notflix from '../notflix.png';
import avatar from '../avatar.png';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow,false);
        };
    },[])

    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img className='logo' src={notflix} alt="notflix  " />
            <div className="userNav">
                <i class="fas fa-search"></i>
                <img className='avatar' src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Navbar
