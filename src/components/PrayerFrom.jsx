import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/styles/prayerForm.css'
const PrayForm = () => {
  // const [form, setForm] = useState({
  //   fullName: '',
  //   phoneNumber: '',
  //   prayerRequest: ''
  // })

  return (
    <div className="prayer">
      <Navbar />
      <div className="main">
        <h1>Submit your prayer request</h1>
        <div className="formContainer">
          <form action="">
            <div className="textBox">
            <label htmlFor="fullName">FullName</label>
            <input type="text" name="fullName" />
            </div>

            <div className="textBox">
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input type="text" name="phoneNumber" />
            </div>

            <div className="textBox">
            <label htmlFor="prayerRequest">PrayerRequest</label>
            <textarea name="prayerRequest" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrayForm