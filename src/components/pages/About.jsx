import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../assets/styles/about.css'
import churchImage from '../../assets/images/churchPic1.jpeg'

const About = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <div className="content">
        <div className="intro">
          <h4>Who we are</h4>
        </div>
        <div className="aboutUs">
          <div className="imgHolder">
            <img src={churchImage} alt=""/>
          </div>
          <div className="write_up">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores deleniti eius atque soluta sunt quos modi sit minima quis iure harum voluptatibus
              porro fuga, qui alias labore ipsum obcaecati quas?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores deleniti eius atque soluta sunt quos modi sit minima quis iure harum voluptatibus
              porro fuga, qui alias labore ipsum obcaecati quas?
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores deleniti eius atque soluta sunt quos modi sit minima quis iure harum voluptatibus
          porro fuga, qui alias labore ipsum obcaecati quas?
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default About