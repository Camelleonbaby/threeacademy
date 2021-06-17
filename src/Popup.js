import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Select from 'react-select'


const options = [
  { value: 'Course1', label: '4-week Data Scrapping Training Project' },
  { value: 'Course2', label: '12-Week End-to-End Data Science Project' },
]


class Popup extends Component {
	constructor(props) {
		super(props)
		this.state={
			Popup_Name: '',
			Popup_Phone: '',
			Popup_Email: '',
      Popup_Option: 'Course1',
      Popup_Message: ''

		}

  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this);
  this.handleOptionChange = this.handleOptionChange.bind(this);
  this.handleMessageChange = this.handleMessageChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

	};

	handleNameChange = (event) => {

		this.setState( {
			Popup_Name: event.target.value
		})
	}

	handlePhoneChange = (event) => {
		this.setState( {
			Popup_Phone: event.target.value
		})
	}

  handleEmailChange = (event) => {
    this.setState( {
      Popup_Email: event.target.value
    })
  }

  handleOptionChange = (event) => {
    this.setState( {
      Popup_Option: event.value
    })
  }

  handleMessageChange = (event) => {
    this.setState( {
      Popup_Message: event.target.value
    })
  }


  handleSubmit (event) {
  const templateId = 'template_S68y3y0S';

  this.sendFeedback(templateId, {message_html: this.state.Popup_Message, from_name: this.state.Popup_Name, reply_to: this.state.Popup_Email, phone_no: this.state.Popup_Phone, course_option: this.state.Popup_Option})
  }

  sendFeedback (templateId, variables) {
  window.emailjs.send(
    'service_ohwczkf', templateId,
    variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }



	render (){

		return( 

		<div className="Popup">

        <section id = "nav-bar"> 

          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src = "img/logo_new.png"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/#home">
                  <a className="nav-link">HOME</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#about">
                  <a className="nav-link">ABOUT US</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#services">
                  <a className="nav-link">SERVICES</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#team">
                  <a className="nav-link">OUR TEAM</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#project">
                  <a className="nav-link">PROJECTS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#contact">
                  <a className="nav-link">CONTACT US</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>



          <section id="register">
            <div className="register">

              <h3 style= {{"color": "grey"}}> Data Science Training Project Registration Form </h3>
 
                  <form className="register-form">

                    <div className="form-group">
                      <p> Name: </p>
                      <input type="text" className="form-control" placeholder="Your Name" onChange={this.handleNameChange} value={this.state.Popup_Name}/>
                    </div>

                    <div className="form-group">
                      <p> Phone: </p>                    
                      <input type="number" className="form-control" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.Popup_Phone}/>
                    </div>

                    <div className="form-group">
                      <p> Email: </p>                    
                      <input type="email" className="form-control" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.Popup_Email}/>
                    </div>

                    <div className="form-group">
                      <p> Training Project: </p> 
                      <Select  onChange={this.handleOptionChange} options={options} />                   
                    </div> 

                    <div className="form-group">
                      <p> Message: </p>                     
                      <textarea className="form-control" rows="5" placeholder="Anything let us know?" onChange={this.handleMessageChange} value={this.state.Popup_Message}></textarea> 
                    </div>

                    <input type="button" value="SUBMIT" className="btn btn-primary" onClick={this.handleSubmit} />

                  </form>
                  
        
      </div>
      
    </section>


    <section id="footer" style={{backgroundImage: "url(img/footer.jpg)", backgroundSize: "cover"  }}>
      <div className="container text-center">
        <h6> When three are walking together, I am sure to find teachers among them. </h6>
        <p> </p>
        <p> © Three Academy, All Rights Reserved 2021 </p> 
        <p> ABN: 49 685 769 843 </p>     
        
      </div>
      
    </section>


      
      </div>

     );

	}
}

export default Popup;

