import React, {useState} from 'react';
import Nav from './Nav';
import './dashStyle.css';
import './Event.css';

const validateImage = RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);

const errorMessageStyle = {
  color:"red", 
  fontSize:"12px", 
  fontWeight: "700",
  textTransform: "capitalize",
}

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
  Object.values(rest).forEach(val => !val && (valid=false))
  return valid
};

const AddEvent = () => {
    const [event, setEvent] = useState({
      title: '',
      imageUrl: '',
      body: '',
      formErrors: {
        titleError: "",
        imageUrlError: "",
        bodyError: ""
      }
    });
  
    const handleChange = (e) => {
      const {name, value} = e.target;
      let formErrors = event.formErrors;
      switch (name) {
        case 'title':
          formErrors.titleError = value.length < 3  ? 'Minimum 3 characters required': ''
          break;
        case 'imageUrl':
          formErrors.imageUrlError = validateImage.test(value) ? '': 'Invalid Image URl'
          break;
        case 'body':
        formErrors.bodyError = value.length < 3  ? 'Minimum 3 characters required': ''
        break;
        default:
          break;
      }
      setEvent({...event, [name]: value}); 
    }
  
  const handleClearForm = () => {
    setEvent({
      title: "",
      imageUrl: "",
      body: "",
      formErrors: {
        titleError: "",
        imageUrlError: "",
        bodyError: ""
      }
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValid(event))
    if (formValid(event)) {
      console.log(event)
      handleClearForm(e)
    } else {
      console.log("form invalid")
    }  
  }

  const { formErrors } = event

  return (
    <div className="container">
      <Nav/>  
      <main>
        <div className="upcomingEvents">
          {/* <h2>Recent Post</h2> */}
          <div className="event_card">
            <div className="card1 card">
              <div className="card_text">
                <h2>Title: <span>Example</span></h2>
                <p>Lorem, ipsum dolor.</p>
              </div>
              {/* <span className="card_icon">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
              </span> */}
            </div>

            <div className="card2 card">
              <div className="card_text">
                <h2>Title: <span>Example2</span></h2>
                <p>Lorem, ipsum dolor.</p>
              </div>
              {/* <span className="card_icon">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
              </span> */}
            </div>

            <div className="card3 card">
              <div className="card_text">
                <h2>Title: <span>Example3</span></h2>
                <p>Lorem, ipsum dolor.</p>
              </div>
              {/* <span className="card_icon">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
              </span> */}
            </div>
          </div>
        </div>
        <div className="newPost">
          <div className="postHeader">
            <h2>Post New Event Requests</h2>
          </div>
          <div className="postForm">
            <form onSubmit={handleSubmit} className="">
              <div className="text_box">
                <input 
                type="text" 
                name="title" 
                placeholder="Event Title" 
                className= "formData"
                value = {event.title}
                onChange={handleChange}
                />
                {formErrors.titleError.length > 0 && (
                  <div style={errorMessageStyle}>{formErrors.titleError}</div>
                )}
              </div>
              <div className="text_box">
                <input 
                type="text" 
                name="imageUrl" 
                placeholder="ImageUrl" 
                className="formData"
                value = {event.imageUrl}
                onChange={handleChange}
                />
                {formErrors.imageUrlError.length > 0 && (
                  <div style={errorMessageStyle}>{formErrors.imageUrlError}</div>
                )}
              </div>
              <div className="text_box">
                <textarea 
                name="body" 
                placeholder="Event Body" 
                cols="30"
                rows="10" 
                className="formData"
                value = {event.body}
                onChange={handleChange}
                />
                {formErrors.bodyError.length > 0 && (
                  <div style={errorMessageStyle}>{formErrors.bodyError}</div>
                )} 
              </div>
              <button type="submit" className="addButton">Add</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddEvent
