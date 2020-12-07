import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServiceTime from '../ServiceTime';
import '../../assets/styles/events.css'; 
import '../../assets/styles/servicetime.css';
import church from '../../assets/images/landing.jpg'

const Events = () => {
  return (
    <div className="event">
      <Navbar />
      <div className="mainContent">
        <div className="subheading">
          <p>Upcoming Event</p>
        </div>
        <div className="eventBody">
          <div className="data">
            <div className="coming">
              <img src={church} alt="" srcset=""/>
              <div className="text">
                <h1>Title of Event</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing 
                  elit. Explicabo, saepe.
                </p>
              </div>
            </div>
            <div className="coming">
              <img src={church} alt="" srcset=""/>
              <div className="text">
                <h1>Title of Event</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing 
                  elit. Explicabo, saepe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ServiceTime />
      </div>
      <Footer />
    </div>
  )
}

export default Events
