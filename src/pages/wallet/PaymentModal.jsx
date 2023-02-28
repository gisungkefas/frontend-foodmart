import React, { useEffect, useState } from 'react';
import './PaymentModal.css';
import { useNavigate } from 'react-router-dom';
import { apiGet, apiPost } from '../../utils/axios';
// import axios from 'axios';
import { useAuth } from './authContext';

export default function PaymentModal(){
    const [amount, setAmount] = useState(0)
   
    const Url = "wallet/fundWallet"

    const navigate = useNavigate()

    const getVerified = async() => {
        const {data} = await apiGet('')
    }
   
    const makePayment = async() => {
        const formdata = {
            amount
            
        }
        console.log(amount)
        console.log(Url)
        const {data} = await apiPost(Url, formdata)
        if(data){
            window.location.href = data
            console.log(data)
        }
        
    }
    


    return(
        <div className='payment-modal-container'>
            <h2>Enter amount:</h2>
            <form onSubmit={makePayment}>
                <div>
                    <input placeholder='Enter Amount Here' name='amount' type='number' className='amount-field' onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <div>
                    <button className='payment-modal-button' type='button' onClick={makePayment} >Proceed to payment</button>
                </div>
            </form>
            
            <img src="../images/cards.png"  className='payment-modal-image'/>
        </div>
    )
}

