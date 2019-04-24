import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
    
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <img alt="Doodlebug Quest" src="images/portfolio/doodlebug.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>DoodleBug Quest</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02">
                    <img alt="Social" src="images/portfolio/social.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Social</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03">
                    <img alt="Bamazon" src="images/portfolio/bamazon.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Bamazon</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04">
                    <img alt="Movie Trailer" src="images/portfolio/movie.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Movie Trailer</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05">
                    <img alt="Kudos" src="images/portfolio/kudos.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Kudos</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06">
                    <img alt="Employee Finder" src="images/portfolio/employee.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Employee Finder</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07">
                    <img alt="Stock Search" src="images/portfolio/stock.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Stock Search</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08">
                    <img alt="Retrocam" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-doodlebug.jpg" alt="DoodleBug Quest" />
            <div className="description-box">
              <h4>DoodleBug Quest</h4>
              <p>A mobile app of activity chart powered by MERN stack (MongoDB, Express, ReactJS, and NodeJS) and target the audience of families with kids 2-10 years old.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Mobil App</span>
            </div>
            <div className="link-box">
              <a href="https://doodle-bug-quest.herokuapp.com/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-social.jpg" alt="Social" />
            <div className="description-box">
              <h4>Social</h4>
              <p>Sozial is a full stack application and an open source minimalist way to stay connected to friends and family. Sozial does not collect personal data and push unwanted news feeds. Sozial is strictly about connecting to people.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://afternoon-savannah-22742.herokuapp.com/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-bamazon.jpg" alt="Bamazon" />
            <div className="description-box">
              <h4>Bamazon</h4>
              <p>Bamazon is an Amazon-like storefront web application with MySQL and Sequelize skills. This web application takes orders from customers and depletes stock from the store’s inventory.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="https://secret-beyond-39597.herokuapp.com/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-movie.jpg" alt="Movie Trailer" />
            <div className="description-box">
              <h4>Movie Trailer</h4>
              <p>Movie Trailer is a frontend Single Page Application that interacts with real-world services such as OMDB TMDB.   This application allows user to browse through their selected movie trailers.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="https://shuchuan35.github.io/JQDB/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-kudos.jpg" alt="Kudos" />
            <div className="description-box">
              <h4>Kudos</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="https://nameless-wave-80015.herokuapp.com/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-employee.jpg" alt="Employee Finder" />
            <div className="description-box">
              <h4>Employee Finder</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="https://aqueous-escarpment-53545.herokuapp.com/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-stock.jpg" alt="Stock Search" />
            <div className="description-box">
              <h4>Stock Search</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="https://shuchuan35.github.io/StocksSearchApp/" target="blank">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="Retrocam" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <button className="popup-modal-dismiss">Close</button>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}