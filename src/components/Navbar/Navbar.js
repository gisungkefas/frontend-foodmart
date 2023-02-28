import React from 'react'
import './Navbar.css';
import { BsCart3, BsPersonCircle } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import logo1 from '../../assets/images/logo.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav--headline'>
        <p>We're open and available for takeaway & delivery. Oder Now</p>
      </div>
        <div className='new-nav'>
          <div className='new-nav_logo'><img className='home-logo' src={logo1} alt=""/></div>
          <div className='navList--items'>
            <ul className='nav--li'>
              <li>Home</li>
              <li>Order</li>
              <li>Company</li>
              <li>FAQ</li>
              <li>Contact</li>
              {/* <li className='navbar--cart'><BsCart3 style={{color:"#FFF"}}/></li> */}
              <li>
                <Link to="/signup">
                  <BsPersonCircle style={{fontSize:"30px"}}/>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar