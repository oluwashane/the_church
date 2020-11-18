import Header from '../Header';
import Footer from '../Footer';
import ServiceTime from '../ServiceTime';
import eventImage from '../../assets/images/eventImage.jpg';
import pastorImage from '../../assets/images/bishop.jpeg';
import '../../assets/styles/home.css';
import '../../assets/styles/servicetime.css';


const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="convert">
          <div className="convertData">
            <h1>Have you made a decision for christ</h1>
            <p>If you’ve recently given your life to Christ, we are here to help with your next steps. Click below for more info!</p>
            <button>Next Steps</button>
          </div>
          <div className="eventsParent">
              <div className="eventImg">
                <img src={eventImage} alt="slide"/>
              </div>
              <div className="eventContent">
                <h2>
                  The latest Jesus Disciples Assembly news and updates!
                </h2>
                <p>
                  Stay up to date on all of the amazing things happening at Jesus Disciples Assembly in Umuahia, Abia. 
                  Find church service times and details on our Updates page.
                </p>
                <button>updates</button>
              </div>
          </div>
        </div>
        <div className="serviceI">
          <ServiceTime />
          <div className="prayerRequest">
            <p>Whatever you may be going through, we are here to pray and celebration alongside you.</p>
            <h1>
              How can we pray for you?
            </h1>
            <button>Prayer Request</button>
          </div>
        </div>
        {/* pastor data */}
        <div className="pastorSection">
          <div className="pastorData">
            <div className="avatar">
              <img src={pastorImage} alt="bishop prosper obaro"/>
            </div>
            <div className="about">
              <h2>
                Bishop Prosper Obaro
                <br />senior pastor of 
                <br />jesus disciples assembly
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos perspiciatis sed deleniti iure ipsa quibusdam ad,fugiat voluptatum dolorum omnis 
                molestias praesentium deserunt nesciunt veniam sint, suscipit nisi natus error! 
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos perspiciatis sed deleniti iure ipsa quibusdam ad,fugiat voluptatum dolorum omnis 
                molestias praesentium deserunt nesciunt veniam sint, suscipit nisi natus error! 
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
