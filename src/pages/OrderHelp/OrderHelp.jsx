import React from 'react'
import { Button } from 'react-bootstrap'
import hamburgerimage from '../../assets/images/orderimage.avif'
import { TiPhoneOutline } from 'react-icons/ti'
import icon from '../../assets/images/image-icon.png'
import { useNavigate, Link } from 'react-router-dom'
import H_icon from '../../assets/images/Foodmart_Logo.png'


import Orderpg from './OrderHelp.module.css'

const HelpPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (

        <div className={Orderpg.container}>
            <div className={Orderpg.help_header}>
                {/* <h2 className={Orderpg.h2h}>FOOD MART</h2> */}
                <img className={Orderpg.img_icon} src={H_icon} alt="logo" />
            </div>



            <div className={Orderpg.help_body}>

                <div className="textbody-help">
                    <h3 className={Orderpg.title2}>
                        To place an order
                    </h3>
                </div>

                <div className={Orderpg.li_text}>
                    <ol>
                        <li><p>Go to products page</p></li>
                        <li><p>Select your choice products and add to cart</p></li>
                        <li><p>Place your order</p></li>
                        <li><p>Proceed to checkout and make payment</p></li>
                    </ol>
                    <Button variant="primary" onClick={goBack}>Back</Button>
                </div>


            </div>
        </div>
    )
}

export default HelpPage
