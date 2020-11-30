import React from 'react'
import { churchBelieve } from '../shared/About'

const card = {
  padding: "20px",
}


const DisplayBelieves = () => {
  return (
    <div style={{width: "100%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3px"}}>
      {churchBelieve.map(church => {
          return(
            <div className="card1" key={church.id} style={card}>
              <h3 style={{textTransform: "uppercase", fontSize: "1em"}}>{church.heading}</h3>
              <p style={{fontSize: "1em", lineHeight: "28px"}}>
                {church.body}
              </p>
              <span>{church.scriptures}</span>
            </div>
          )
        })
      }
    </div>
  )
}

const Believe = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center"}}>
      <h2 style={{letterSpacing: "1px"}}>What We Believe</h2>
      <div>
        <DisplayBelieves />
      </div>
      <button style={{padding: "15px 30px", background: "#63e0a4", border: "none", color: "#F0F7F4"}}>Read More</button>
    </div>
  )
}

export default Believe
