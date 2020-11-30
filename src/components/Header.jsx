import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from './Navbar';
import '../assets/styles/header.css'

const Header = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="message">
        <h1>We are better together</h1>
        <p>A church in Nigeria, Abia state where you can connect with destiny</p>
        {/* <p>church service sundays 7:30Am</p> */}
        <div className="headerButton">
          <Link to="serviceI"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>service info</button>
          </Link>
          
          <button>Who we are</button>
        </div>
        
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  )
}

export default Header