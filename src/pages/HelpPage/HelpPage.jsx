import React from 'react'
// import {Card, Button} from 'react-bootstrap'
// import hamburgerimage from '../../assets/images/hamburger2.jpg'
import { TiPhoneOutline } from 'react-icons/ti'
import H_icon from '../../assets/images/Foodmart_Logo.png'
import { useNavigate } from 'react-router-dom'
import Orderpg2 from './HelpPage.module.css'
import { Button } from 'react-bootstrap'

const HelpPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='help-container'>
            <div className={Orderpg2.container}>
                <div className={Orderpg2.help_header}>
                    {/* <h2 className={Orderpg2.h2h}>FOOD MART</h2> */}
                    <img className={Orderpg2.img_icon} src={H_icon} alt="logo" />
                </div>



                <div className={Orderpg2.help_body}>

                    <div className="textbody-help">
                        <h3 className={Orderpg2.title2}>
                            Do you need more help?
                        </h3>
                    </div>

                    <div className={Orderpg2.li_text}>
                        <ul>
                            <p className={Orderpg2.p_text}> Call us on this number: +2348130101447   <TiPhoneOutline /></p>
                        </ul>
                        <Button variant="primary" onClick={goBack}>Back</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HelpPage
