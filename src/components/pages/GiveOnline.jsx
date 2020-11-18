import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer';
import '../../assets/styles/give.css'

const GiveOnline = () => {
  return (
    <>
      <div className="giveOnline">
      <Navbar />
        <div className="parent">
          <div className="payOnline">
            <div className="button flutter">
              make payment using flutter
            </div>
            <div className="button payStack">
              make payment using paystack
            </div>
          </div>
          <div className="accountDetails">
            <ul>
              <p>Details for Bank Transfer</p>
              <li>Bank Name: <span></span></li>
              <li>Name of Account: <span></span></li>
              <li>Account Number: <span></span></li>
            </ul>
            <ul>
              <p>Partnership</p>
              <li>Bank Name: <span></span></li>
              <li>Name of Account: <span></span></li>
              <li>Account Number: <span></span></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default GiveOnline
