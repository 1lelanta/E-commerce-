import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const [selectedOpion, setSelectedOption] = useState("More");
    const navigate = useNavigate();

    const handleDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);

        // Optional: Navigate to a new route based on the option
        switch (value) {
            case "Watch":
                navigate("/watch");
                break;
            case "Shoes":
                navigate("/shoes");
                break;
            case "Socks":
                navigate("/socks");
                break;
            case "Belt":
                navigate("/belt");
                break;
            default:
                break;
        }
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: 'none'}} to ="/">Shop</Link>{menu ==="shop"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{ textDecoration: 'none'}} to ="/mens">Men</Link> {menu ==="mens"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to ="/womens">Women</Link>{menu ==="womens"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to ="/kids">Kid</Link>{menu ==="kids"? <hr/>: <></>}</li>
        </ul>
        <div className="drop-down">
            
                <select value={selectedOpion} onChange={handleDropdownChange}>
                    <option value="More"> More</option>
                    <option value="Watch">Watch</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Socks">Socks</option>
                    <option value="Belt">Belt</option>
                </select>
           
            
        </div>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to ="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar