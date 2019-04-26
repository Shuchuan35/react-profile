import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

export default class Contactus extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isImageLoader: false
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  formSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      return;
    }
    const params = {
      from_name: this.state.name,
      from_email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    this.setState({ isImageLoader: true });
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.subject);
    console.log(this.state.message);
    // emailjs.send('gmail', 'formsubmit', params, 'user_ISBvizalqrfttKA25yz7y')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     this.setState({ name: '', email: '', subject: '', message: '', isImageLoader: false });
    //   }, (err) => {
    //     console.log('FAILED...', err);

    //   });
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form className="contact-form" onSubmit={this.formSubmit}>
                <label htmlFor="message-name">Your Name <span className="required">*</span></label>
                <input onChange={this.handleChange} name="name" type="text" placeholder="Your Name" required value={this.state.name} />

                <label htmlFor="message-email">Your Email <span className="required">*</span></label>
                <input onChange={this.handleChange} name="email" type="email" placeholder="your@email.com" required value={this.state.email} />

                <label htmlFor="message-subject">Subject <span className="required">*</span></label>
                <input onChange={this.handleChange} name="subject" type="text" placeholder="Subject" required value={this.state.subject} />

                <label htmlFor="message-input">Message <span className="required">*</span></label>
                <textarea onChange={this.handleChange} name="message" type="text" placeholder="Please write your message here" required value={this.state.message} />

                <div className="button--container">
                  <button type="submit" className="submit">Submit</button>
                  
                  {this.state.isImageLoader &&
                    <div style={{ display: 'inline-block' }}>
                      <img alt="submitting" src="images/loader.gif" />
                    </div>
                  }
                </div>
              </form>
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Jennifer Hou<br />
                  Peachtree Corners, GA 30092 US<br />
                  <span>(678) 777-4928</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    );
  }
}