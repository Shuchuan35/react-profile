import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* FROND-END
      ----------------------------------------------- */}
          <div className="row">
            <div className="three columns header-col">
              <h1><span>FROND-END</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <img alt="html" src="images/resume/html.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/css.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/js.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/bootstrap.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/react.jpg" style={{ width: '80px', height: '80px' }} />
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* SERVER
      ----------------------------------------------- */}
          <div className="row">
            <div className="three columns header-col">
              <h1><span>SERVER</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <img alt="html" src="images/resume/node.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/express.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/npm.jpg" style={{ width: '80px', height: '80px' }} />
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* DATABASE
      ----------------------------------------------- */}
          <div className="row">
            <div className="three columns header-col">
              <h1><span>DATABASE</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <img alt="html" src="images/resume/mongodb.jpg" style={{ width: '80px', height: '80px' }} />{'  '}
                  <img alt="html" src="images/resume/mysql.jpg" style={{ width: '80px', height: '80px' }} />
                </div>
              </div>
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}