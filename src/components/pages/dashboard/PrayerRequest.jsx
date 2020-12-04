import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar'
import { RequestData } from '../../../shared/paryerRequest'
import './dashStyle.css';
import './request.css';

const Request = () => {
  console.log(RequestData)
  return (
    <div className="prayer_list">
      {RequestData.map(req => {
        return (
          <div className="card" key={req.id}>
            <p>Name: {req.name}</p>
            <span>Request: {req.request}</span>
            <p>email: {req.email}</p>
          </div>
        )
      })}
    </div>
  )
}
const PrayerRequest = () => {
  return (
    <div className="container">
      <Nav/>  
      <main>
        <div className="prayers">
          <div className="prayer_request_header">
            <h2>Prayer Requests</h2>
          </div>
          <Request />
        </div>
      </main>
      <Sidebar />
    </div>
  )
}

export default PrayerRequest
