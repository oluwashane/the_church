import React from 'react'
import DashboardSideBar from './DashboardSideBar';
import {PrayerRequest} from '../../../shared/paryerRequest';
import './dashboard.css';

function VisitorsRequest() {
  return (
    <div>Hello world</div>
    // <Accordion>
      // {PrayerRequest.map(request => {
      //   return (
          // <div>Hello World</div> 
          // <Card key={request.id}>
          //   <Accordion.Toggle as={Card.Header} eventKey={request.id}>
          //       {request.name}
          //   </Accordion.Toggle>
          //   <Accordion.Collapse eventKey={request.id}>
          //     <Card.Body>
          //       <Card.Text>{request.request}</Card.Text>
          //       <span style={{fontSize: "0.8em"}}>Email: {request.email}</span>
          //     </Card.Body>
          //     {/* <Card.Link>{request.request}</Card.Link> */}
          //   </Accordion.Collapse>
          // </Card>
      //   )
      // })}
    // </Accordion>
  )
}
const DashBoardPrayer = () => {
  return (
    <div className="dashboard">
      <DashboardSideBar />
        <div className="main">
          <div style={{
            width: "50%", 
            margin: "auto", 
            textTransform: "uppercase",
            fontWeight: "bold"
            }}>
            <p></p> 
            <VisitorsRequest />
          </div>
        </div>
        
    </div>
  )
}

export default DashBoardPrayer
