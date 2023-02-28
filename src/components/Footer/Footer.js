import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import {BsDot} from "react-icons/bs"
import twitter from '../../assets/images/twitter-icon.svg'
import youtube from '../../assets/images/youtube--icon.svg'
import instagram from '../../assets/images/ig--icon.svg'

const Footer = () => {
  return (
    <>
    {/* <hr /> */}
    <div className='footer_main_d'>
    <div className="footer-container">
        <div className="left">
          <div className="logo--img"><img src={logo} alt="logo-icon"/>
          <p>Takeaway & Delivery for Small business</p>
         </div>
        </div>
        <div className="right">
          <div className="company">
          <p>Company</p>
            <ul>
              <li>Home</li>
              <li>Order</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="company">
          <p>Company</p>
          <ul>
              <li>Request for a meal</li>
              <li>Quick delivery</li>
              <li>Engineers knows it all</li>
              <li>Developers are the real gee</li>
            </ul>
          </div>
          <div className="company">
          <p>Flowbase</p>
          <ul>
              <li>More GFoodmart Channels</li>
            </ul>
          </div>

        </div>
    </div>
    <div className='bottom--footer'>
        {/* <div className='main-bottom-footer'> */}
            <div className='left--bottom'>
                <p>Built by <Link to={"/decagon"}>DecaDev</Link><BsDot/>Powered by<Link to={"/decadev"}> Decagon</Link></p>
            </div>
            <div className='right--bottom'>
                <span><img className='rt_bt_img' src={twitter} alt='twitter-icon'/></span>
                <span><img className='rt_bt_img' src={youtube} alt='youtube-icon'/></span>
                <span><img className='rt_bt_img' src={instagram} alt='instagram-icon'/></span>
            </div>
        {/* </div> */}
    </div>
    </div>
    </>
  )
}

export  default Footer;
