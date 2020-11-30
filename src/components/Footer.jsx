import '../assets/styles/footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="summary">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Saepe officia expedita earum corporis provident 
            vero sit sint, molestiae facilis dicta neque nisi suscipit.
            Velit nesciunt eveniet in eius dolorum ipsa.
          </p>
          <div className="socialIcons">
            <span>
              <i className="fab fa-facebook-square"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="subscribe">
          <p>Sign up with your email address to receive Jesus Disciples Assembly news and updates.</p>
            <form action="">
              <label htmlFor="fullName">FullName</label><br />
              <input type="text" name="fullName" className="textbox" id=""/><br />
              <label htmlFor="email">Email Address</label><br />
              <input type="email" name="" className="textbox" id=""/><br />
              <label htmlFor=""></label>
              <button>sign up</button>
            </form>
        </div>
      </div>
      {/* <p>&#169; 2020 produced by oluwashane</p> */}
    </>
  )
}

export default Footer
