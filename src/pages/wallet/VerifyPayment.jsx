import React from 'react'
import { apiGet } from '../../utils/axios'

const VerifyPayment = () => {

    const getVerification = async() => {
        const {data} = await apiGet(`/wallet/verifyPayment/?id`)
    }
    
  return (
    <div>
      Verified
    </div>
  )
}

export default VerifyPayment
