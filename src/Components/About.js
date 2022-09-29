import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = "IIITA";
    const profilepic = "images/profilepic1.png" ;
    const bio = "we will Do it LATER";
    const street = "peepal gaon";
    const city = "Prayagraj";
    const state = "Uttar Pradesh";
    const zip = "211015";
    const phone = "9625675356";
    const email = "idarg.official@gmail.com";
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" style = {{backgroundImage: `url("https://www.iiita.ac.in/uploads/carousel/31264_o907.jpg")` ,backgroundSize:'100% 100%' , backgroundPosition : "center" , }} >
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="IDARG Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row" style = {{}}>
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    {/* <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

const style = {

     
}
export default About;
