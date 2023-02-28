import React from 'react'
import "./Popup.css"
const Popup = ({closePopup,title, message, symbol}) => {
  return (
    <div className='popup-container'>
        <div className='popup-content'>
            {symbol}
            <h1>
                {title}
            </h1>
            <p>
                {message}
            </p>
            <button onClick={closePopup}>
                OK
            </button>
        </div>
    </div>
  )
}

export default Popup