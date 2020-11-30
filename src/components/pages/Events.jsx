import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServiceTime from '../ServiceTime';
import '../../assets/styles/events.css'; 
import '../../assets/styles/servicetime.css';
import church from '../../assets/images/landing.jpg'

const Events = () => {
  return (
    <div className="events">
      <Navbar />
      <div className="mainContent">
        {/* <p>Upcoming Events</p> */}
        <ServiceTime />
        <div className="eventBody">
          <div className="data">
            {/* <div className="imageHolder coming">
              <img src={church} alt="" srcset=""/>
            </div> */}
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
      </div>
      <Footer />
    </div>
  )
}

export default Events
