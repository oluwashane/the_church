import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrayForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    prayerRequest: ''
  })

  return (
    <div>
      <Navbar />
      <div className="">
        <h1>Submit your prayer request</h1>
        <form action="">
          
          <label htmlFor="fullName">FullName</label>
          <input type="text" name="fullName" />

          <label htmlFor="phoneNumber">Mobile Number</label>
          <input type="text" name="phoneNumber" />

          <label htmlFor="prayerRequest">PrayerRequest</label>
          <textarea name="prayerRequest" id="" cols="30" rows="10"></textarea>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default PrayForm