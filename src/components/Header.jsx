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
          <button>service info</button>
          <button>Who we are</button>
        </div>
        
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  )
}

export default Header