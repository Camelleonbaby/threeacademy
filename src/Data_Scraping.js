import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom' ;
import './Data_Scraping.css';

class Data_Scraping extends Component {

  constructor(props) {
  super(props);
  this.state = { feedback: '', name: '', phone:'', email: '' };
  this.handleChange_name = this.handleChange_name.bind(this);
  this.handleChange_phone = this.handleChange_phone.bind(this);
  this.handleChange_email = this.handleChange_email.bind(this);
  this.handleChange_feedback = this.handleChange_feedback.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange_name(event) {
    this.setState({name: event.target.value})
  }

  handleChange_phone(event) {
    this.setState({phone: event.target.value})
  }

  handleChange_email(event) {
    this.setState({email: event.target.value})
  }

  handleChange_feedback(event) {
    this.setState({feedback: event.target.value})
  }  







  handleSubmit (event) {
  const templateId = 'template_S68y3y0S';

  this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email, phone_no: this.state.phone})
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

		<div className="Data_Scraping">


        <section id = "nav-bar">  
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img className = "logoImg" style = {{"padding": "0.4em"}} src = "img/logo_new.png"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="nav-bar" spy={true} smooth={true} offset={-70} duration={500} > ABOUT </Link>                       
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="services" spy={true} smooth={true} offset={-70} duration={500} > OUR COURSES </Link>   
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="project" spy={true} smooth={true} offset={-70} duration={500} > DATA PROJECTS </Link>                  
                </li>                                              

                <li className="nav-item">
                  <Link className="nav-link" to="team" spy={true} smooth={true} offset={-70} duration={500} > INSTRUCTORS </Link>                       
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="contact" spy={true} smooth={true} offset={-70} duration={500} > CONTACT US </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>


        <div id="slider">

          <div id="headerSlider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
              <li data-target="#headerSlider" data-slide-to="1"></li>
              <li data-target="#headerSlider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/banner1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Life Long Learning </h5>
                  </div>
              </div>

              <div className="carousel-item">
                <img src="img/banner2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Extract knowledge from Data </h5>
                  </div>          
              </div>

              <div className="carousel-item">
                <img src="img/banner3.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Smarter Decision Making </h5>
                  </div>          
              </div>

            </div>
            <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>




        <section id = "AI_Writer" style = {{ paddingTop: "5em"}}>

        <div className="container" >

          <h1 style = {{color: "black", fontsize: "bold"}}> Data Collection </h1>

              <div className="row  project-showcase" style = {{ paddingTop: "2em"}}>

                <div className = "col-md-6  project-showcase" >
                  <div className = "project-content" style = {{textAlign: "Right", paddingTop:"1.5em"}} > 

                    <iframe src='https://www.youtube.com/embed/TATeOOj6-EA'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen
                          

                    /> 

                  </div>
                </div>

                <div className = "col-md-6 project-showcase" style = {{paddingRight: "10em"}}>
                  <div className = "project-content" > 
                  
                      This is a four-week short course (8 hours of lectures + 4 hours of one-on-one instruction), which involves data collection and cleaning techniques. Target learners are undergraduates and graduate students, career beginner and continuous learners who want to pursue a career in the field of data science but do not know how to start. In this course, you will learn the basics of Python, HTML and webApp technology. You will also use Python to build your own data pipeline, including crawling data from the website, cleaning the data, and loading the data into a SQL database. This course will provide you with a new perspective on data science and data scientist careers.
                  </div>
                </div>



              </div>
                
        </div>



        </section>


        <section id="services" style={{backgroundImage: "url(img/Data_Scraping_Student.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", marginTop: "5em", fontColor: "black"}}>
          <div className="container">     
            <h1 style = {{color: "black"}} >Target Students</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <h3 style = {{color: "black", paddingTop: "1em"}}> Undergraduate </h3>
                <p style = {{color: "black"}}> If you are an undergraduate student and want to have some first-hand expericence in data science </p>

              </div> 


              <div className="col-md-3 text-center">

                <h3 style = {{color: "black", paddingTop: "1em"}}> Postgraduate </h3>
                <p style = {{color: "black"}}> If you are a postgraduate student and want to increase your opportunity in the job market.  
                </p>
              </div> 

              <div className="col-md-3 text-center" style = {{color: "black"}}>

                <h3 style = {{paddingTop: "1em"}}> PhD Student </h3>
                <p style = {{color: "black"}}> If you are a PhD student with your own research field, but want to explore the world of Data Science in a short time.  
                </p>

              </div> 

              <div className="col-md-3 text-center" style = {{color: "black"}}>

                <h3 style = {{paddingTop: "1em"}}> Career Starter </h3>
                <p style = {{color: "black"}}> If you are a career starter and want to figure out whether being a Data Scientist will be suitable for you.  
                </p>

              </div> 
            </div>
          </div>
        </section>

        <section id = "AI_Writer" style = {{ paddingTop: "5em"}}>

        <div className="container" style = {{ paddingLeft: "10em"}}>

          <h1 > Course Outline </h1>

              <div className="row  project-showcase" style = {{ paddingTop: "2em", paddingBottom: "em"}}>

                <ul>

                  <li> 
                    <h4> Lesson 1: Python and HTML Basis </h4> 
                    <p> In this lesson, you will learn to write Python code for scraping data from a HTML-based website. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 2: Get your data from HTML-based web page </h4> 
                    <p> In this lesson, you will learn how to get data from a HTML-based web page using BeautifulSoup and Regular Expression. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 3: Get your data behind barriers </h4> 
                    <p> In this lesson, you will learn how to circle around various barriers and get the data you want. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 4: Legal and Ethical in Data Scraping </h4> 
                    <p> In this lesson. you will learn Legal and Ethical issues in data scrapping and data privacy concerns.  </p> 
                  </li>

 
                </ul>

              </div>
                
        </div>


        </section>

        <section id="services" style={{backgroundImage: "url(img/Data_Scraping_Outcome.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", marginTop: "5em", fontColor: "black"}}>
          <div className="container">     
            <h1 style = {{color: "white"}} > Learning Outcomes </h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <h3 style = {{color: "white", paddingTop: "1em"}}> New Skills </h3>
                <p style = {{color: "white"}}> You will be equipped with the skills of Python, HTML, website infrastructure and network security. </p>

              </div> 

              <div className="col-md-3 text-center" style = {{color: "white"}}>

                <h3 style = {{paddingTop: "1em"}}> New Vision </h3>
                <p style = {{color:"white"}}> You will gain new vision about data science and data scientist as a career, and explore more opportunities. 
                </p>

              </div> 

              <div className="col-md-3 text-center">

                <h3 style = {{color: "white", paddingTop: "1em"}}> Owned project </h3>
                <p style = {{color: "white"}}> You will develop your own datapipe line for your own problems, and add it into your resume.  
                </p>
              </div> 

              <div className="col-md-3 text-center" style = {{color: "white"}}>

                <h3 style = {{paddingTop: "1em"}}> Partnership </h3>
                <p style = {{color: "white"}}> You will meet and cooperate with smart students from various backgrounds, and build possible partership for the future.   
                </p>

              </div> 


            </div>
          </div>
        </section>

          <section id="contact">
            <div className="container">
              <h1>Register your interest</h1>
    
                  <form className="contact-form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" onChange={this.handleChange_name} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" placeholder="Phone Number" onChange={this.handleChange_phone} value={this.state.phone}/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address" onChange={this.handleChange_email} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="5" placeholder="Your Message" onChange={this.handleChange_feedback} value={this.state.feedback}></textarea> 
                    </div>

                    <input type="button" value="Summit" className="btn btn-primary" onClick={this.handleSubmit} />

                  </form>
\
              
            </div>
            
          </section>


        <section id="footer" style={{backgroundImage: "url(img/footer.jpg)", backgroundSize: "cover"  }}>
          <div className="container text-center">
            <h6> When three are walking together, I am sure to find teachers among them. </h6>
            <p> </p>
            <p> © Three Academy, All Rights Reserved 2021 </p>      
            
          </div>
      
        </section>
      
      </div>

     );

	}
}

export default Data_Scraping;