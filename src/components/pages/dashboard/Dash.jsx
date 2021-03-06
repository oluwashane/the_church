import React from 'react';
import Nav from './Nav';
import welcomeImg from '../../../assets/images/welcome.jpg';
import './dashStyle.css'

const dash = () => {
  return (
    <div className="container">
      <Nav />
      <main>
        <div className="welcome_showcase">
          <div className="welcome_image">
            <img src={welcomeImg} alt="welcome"/>
          </div>
          <div className="welcome_text">
            <h1>Hello Pastor</h1>
            <p>Welcome to your admin Dashboard</p>
          </div>
        </div>

        <div className="event_card">
          <div className="card1 card">
            <div className="card_text">
              <h2>Title: <span>Example</span></h2>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <span className="card_icon">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </span>
          </div>

          <div className="card2 card">
            <div className="card_text">
              <h2>Title: <span>Example2</span></h2>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <span className="card_icon">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </span>
          </div>

          <div className="card3 card">
            <div className="card_text">
              <h2>Title: <span>Example3</span></h2>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <span className="card_icon">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </span>
          </div>

        </div>

      </main>
    </div>
  )
}

export default dash
