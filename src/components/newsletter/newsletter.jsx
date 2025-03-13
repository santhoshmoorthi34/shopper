import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className="full">
    <div className='news-letter'>
      <h1>GET EXCULUSIVE OFFERS ON EMAIL</h1>
      <p>Subscribe to our newletter and stay upadated</p>
      <div>
        <input type="email" placeholder='Youe email id' />
        <button>Subscribe</button>
      </div>
      
    </div >
    </div>
  )
}

export default Newsletter
