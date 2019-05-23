import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="profilepic" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I am a full-stack web developer with a working knowledge of frontend and backend technologies like HTML, CSS, Javascript,
                jQuery, ReactJS, NodeJS and MongoDB.  I gain these knowedge from Georgia Tech coding boot camp where several full stack
                web applications were build from mockup to deployment either by myselft or with a team.
            </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Jennifer Hou</span><br />
                    <span>Peachtree Corners, GA 30092 US</span><br />
                    <span>(678) 777-4928</span><br />
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;