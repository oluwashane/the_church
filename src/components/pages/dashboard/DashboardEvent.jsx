import React, {useState} from 'react';
import DashboardSideBar from './DashboardSideBar';
import { MonthlyEvent } from '../../../shared/events'
import './dashboard.css';
import './events.css';

const validateImage = RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);

const errorMessageStyle = {
  color:"red", 
  fontSize:".8em", 
  fontWeight: "700",
  textTransform: "capitalize",
}

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
  Object.values(rest).forEach(val => !val && (valid=false))
  return valid
};

const PostedEvents = () => {
  return (
    <>
      {MonthlyEvent.map(event => {
        return (
          <div className="currentEvents" key={event.id}>
            <div className="items">
              <p>{event.title}</p>
              <p>{event.date}</p>
              <p>{event.body}</p>
              <i className="far fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
        )
      })}
    </>
  )
}

const DashboardEvent = (props) => {
  const [event, setEvent] = useState({
    title: "",
    imageUrl: "",
    body: "",
    // formErrors: {
    //   titleError: "",
    //   imageUrlError: "",
    //   bodyError: ""
    // }
  });

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target;
    let formErrors = event.formErrors;
    // switch (name) {
    //   case 'title':
    //     formErrors.titleError = value.length < 3 && value.length > 0 ? 'Minimum 3 characters required': ''
    //     break;
    //   case 'imageUrl':
    //     formErrors.imageUrlError = validateImage.test(value) && value.length > 0 ? '': 'Invalid Image URl'
    //     break;
    //   case 'body':
    //   formErrors.bodyError = value.length < 3 && value.length > 0 ? 'Minimum 3 characters required': ''
    //   break;
    //   default:
    //     break;
    // }
    setEvent({...event, [name]: value}); 
  }

  const handleClearForm = (e) => {
    e.preventDefault();
    setEvent({
      title: "",
      imageUrl: "",
      body: ""
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event)
    handleClearForm(e)
    // if (formValid(event)) {
    //   console.log(event)
    //   handleClearForm(e)
    //   console.log(event)
    // } else {
    //   console.log("form invalid")
    // }  
  }

  return (
    <div className="dashboard">
      <DashboardSideBar />
      <div className="main">
        <div className="">
          <p>Add New Events</p>
          <form onSubmit={handleSubmit} className="newEvent">
            <div>
              <input 
              type="text" 
              name="title" 
              placeholder="Event Title" 
              className= "formData"
              value = {event.title}
              onChange={handleChange}
              />
              {/* {event.formErrors.titleError.length > 0 && (
                <div style={errorMessageStyle}>{event.formErrors.titleError}</div>
              )} */}
            </div>
            <div>
              <input 
              type="text" 
              name="imageUrl" 
              placeholder="ImageUrl" 
              className="formData"
              value = {event.imageUrl}
              onChange={handleChange}
              />
              {/* {event.formErrors.imageUrlError.length > 0 && (
                <div style={errorMessageStyle}>{event.formErrors.imageUrlError}</div>
              )} */}
            </div>
            <div>
              <textarea 
              name="body" 
              placeholder="Event Body" 
              cols="30"
              rows="10" 
              className="formData"
              value = {event.body}
              onChange={handleChange}
              />
              {/* {event.formErrors.bodyError.length > 0 && (
                <div style={errorMessageStyle}>{event.formErrors.bodyError}</div>
              )}  */}
            </div>
            <button type="submit" className="formData btn">Add</button>
          </form>
        </div>
        <PostedEvents  />
      </div>
    </div>
  )
}

export default DashboardEvent
