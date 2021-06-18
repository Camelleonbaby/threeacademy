import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Select from 'react-select'


const options = [
  { value: 'Course1', label: 'Project 1: 4-week Data Scrapping Training Project' },
  { value: 'Course2', label: 'Project 2: 12-Week End-to-End Data Science Project' },
]

const optionsEdu = [
  { value: 'Bachelor', label: 'Bachelor' },
  { value: 'Master', label: 'Master' },
  { value: 'PhD', label: 'PhD' },  
]


class Popup extends Component {
	constructor(props) {
		super(props)
		this.state={
			Popup_Name: '',
			Popup_Phone: '',
			Popup_Email: '',
      Popup_Edu: '',
      Popup_Option: 'Course1',
      Popup_Message: ''

		}

  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this);
  this.handleOptionChange = this.handleOptionChange.bind(this);
   this.handleOptionEduChange = this.handleOptionEduChange.bind(this); 
  this.handleMessageChange = this.handleMessageChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.sendFeedback = this.sendFeedback.bind(this);  

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

  handleOptionEduChange = (event) => {
    this.setState( {
      Popup_Edu: event.value
    })
  }

  handleMessageChange = (event) => {
    this.setState( {
      Popup_Message: event.target.value
    })
  }


  handleSubmit (event) {
  const templateId = 'template_S68y3y0S';


  this.sendFeedback(templateId, {message_html: this.state.Popup_Message, from_name: this.state.Popup_Name, reply_to: this.state.Popup_Email, phone_no: this.state.Popup_Phone, education: this.state.Popup_Edu, course_option: this.state.Popup_Option})
  this.confirmSubmit();

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

  confirmSubmit () {
    alert('Thanks you! Your message has been sent. We will contact you as soon as we can.');
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

              <h3 style= {{"color": "grey"}}> Data Science Training Project </h3>
 
              <div className = "project">

                <div className = "project1">  

                  <h6> Project 1: Data Scrapping Project </h6>
                  <p> - This is a four-week project (8 hours of training + 4 hours of one-on-one instruction) </p>
                  <p> - Web data scraping and cleaning tasks using Python</p>
                  <p> - Suitable for students who want to start learning data science </p>
                  <p> - Skills cover Python, HTML, Web Server techniques etc. </p> 

 
                </div>

                <div className = "project2">  

                  <h6> Project 2: End-to-End Data Project</h6>
                  <p> - This is a twelve-week data science project (24 hours of training + 12 hours of one-on-one instruction) </p>
                  <p> - Include three modules: Web Data Scraping, Data Visualization, and Machine Learning </p>
                  <p> - Suitable for students who want to practice their data science skills in a real industrial project.</p> 
                  <p> - Skills cover Python, HTML, Web Dashboard, Machine Learning etc. </p>


                </div>


                <Link to= '/#home'><button type="button" className = "btn btn-primary" style = {{marginTop: "1em"}}> More Info </button></Link>                

              </div>



              <h3 style= {{"color": "grey", "marginTop": "1em"}}>  </h3>

                  <form className="register-form">

                    <div className="form-group">
                      <p> Name*: </p>
                      <input type="text" className="form-control" placeholder="Your Name" onChange={this.handleNameChange} value={this.state.Popup_Name} required="required"/>
                    </div>

                    <div className="form-group">
                      <p> Phone: </p>                    
                      <input type="number" className="form-control" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.Popup_Phone}/>
                    </div>

                    <div className="form-group">
                      <p> Email*: </p>                    
                      <input type="email" className="form-control" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.Popup_Email}/>
                    </div>


                    <div className="form-group">
                      <p> Education: </p>
                      <Select  onChange={this.handleOptionEduChange} options={optionsEdu} /> 
                    </div>

                    <div className="form-group">
                      <p> Training Project*: </p> 
                      <Select  onChange={this.handleOptionChange} options={options} />                   
                    </div> 

                    <div className="form-group">
                      <p> Message: </p>                     
                      <textarea className="form-control" rows="5" placeholder="Your Message" onChange={this.handleMessageChange} value={this.state.Popup_Message}></textarea> 
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

