import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './Machine_Learning.css';

class Machine_Learning extends Component {
	constructor(props) {
		super(props)
		this.state={
			title: '',
			seed: '',
			text: '',
		}
	}

	handleUsernameChange = (event) => {

		this.setState( {
			title: event.target.value
		})
	}

	handleSeedChange = (event) => {
		this.setState( {
			seed: event.target.value
		})
	}

	handleSubmit = event => {

    var entry = {seed_text: this.state.seed};

		fetch('/essays/ai_writer_api', {
      method:"POST",
      credentials: "include",
      body: JSON.stringify(entry),
      cache: "no-cache",
      headers: new Headers({

        "content-type":"application/json"

      })
    })
    .then(res => res.json()).then(data => {

			this.setState({

				text: data.AI_Writer
			})
		});

		event.preventDefault()
	}



	render (){

		return( 

		<div className="Machine_Learning">


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

          <h1 style = {{color: "black", fontsize: "bold"}}> Data Scraping Training Course </h1>

              <div className="row  project-showcase" style = {{ paddingTop: "2em", paddingBottom: "em"}}>

                <div className = "col-md-6  project-showcase" >
                  <div className = "project-content" style = {{textAlign: "Right", paddingTop:"1.5em"}} > 

                    <iframe src='https://www.youtube.com/embed/h_WvNTdFIr4'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            width="100%"
                            height="300"
                            frameBorder="0"
                          

                    /> 

                  </div>
                </div>

                <div className = "col-md-6 project-showcase">
                  <div className = "project-content" style = {{paddingRight: "5.5em", fontSize: "1.1em"}}> 
                    This is a four-weeks (8h lecture + 4h one-to-one instruction ) short course on the techniques of data Scraping. The target learners are undergraduate and postgraduate students who want to have a career in the field of Data Science but don't know how to start.   In this course, You will learn the basis of Python, HTML, and webApp techniques.  You will also build your own data pipeline using Python, including data scraping from website, data cleaning, and data loading to SQL databse. This course will provide you a new vision about Data Scince and Data Scientist as a career.              
                  </div>
                </div>



              </div>
                
        </div>



        </section>


        <section id="services" style={{backgroundImage: "url(img/Data_Scraping_Student.jpeg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", marginTop: "5em", fontColor: "black"}}>
          <div className="container">     
            <h1 style = {{color: "black"}} >Target Students</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <h3 style = {{color: "black", paddingTop: "1em"}}> Undergraduate </h3>
                <p style = {{color: "black"}}> If you are an undergraduate student and want to have some expericences on the most funcy field in the next few decades </p>

              </div> 


              <div className="col-md-3 text-center">

                <h3 style = {{color: "black", paddingTop: "1em"}}> Postgraduate </h3>
                <p style = {{color: "black"}}> If you are a postgraduate student and want to increase your opportunity in the job market.  
                </p>
              </div> 

              <div className="col-md-3 text-center" style = {{color: "black"}}>

                <h3 style = {{paddingTop: "1em"}}> PhD Student </h3>
                <p style = {{color: "black"}}> If you are a PhD student with your own research field, but want to understand what is the world of Data Science in a short time.  
                </p>

              </div> 

              <div className="col-md-3 text-center" style = {{color: "black"}}>

                <h3 style = {{paddingTop: "1em"}}> Career Starter </h3>
                <p style = {{color: "black"}}> If you are a career starter and want to figure out whether being a Data Scientist will be your future.  
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
                    <h4> Lesson 1: The essence of machine learning </h4> 
                    <p> In this lesson, you will learn the essence of machine learning, its mathematical foudantion and capability boundary. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 2: Typical machine learning algorithms and their best practices - Part 1 </h4> 
                    <p> In this lesson, you will learn the essence of typical machine learning algorithem and their best practices. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 3: Typical machine learning algorithms and the best practices - Part 2 </h4> 
                    <p> In this lesson, you will learn the essence of typical machine learning algorithem and their best practices. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 4: Develop your machine learning model and solve your own business problems </h4> 
                    <p> In this lesson. you will learn the relevant leglity and policy about data scrapping and data privacy  </p> 
                  </li>

 
                </ul>

              </div>
                
        </div>



        </section>

        <section id="services" style={{backgroundImage: "url(img/Data_Scraping_Outcome.jpeg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", marginTop: "5em", fontColor: "black"}}>
          <div className="container">     
            <h1 style = {{color: "white"}} > Learning Outcomes </h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <h3 style = {{color: "white", paddingTop: "1em"}}> New Skills </h3>
                <p style = {{color: "white"}}> You will be equipped with the skills of Python, machine learning algorithms and the strategy of machine learning model selection. </p>

              </div> 

              <div className="col-md-3 text-center" style = {{color: "white"}}>

                <h3 style = {{paddingTop: "1em"}}> New Vision </h3>
                <p style = {{color:"white"}}> You will gain new vision about data science and data scientist as a career, and explore more opportunities. 
                </p>

              </div> 

              <div className="col-md-3 text-center">

                <h3 style = {{color: "white", paddingTop: "1em"}}> Your own project </h3>
                <p style = {{color: "white"}}> You will develop your own machine learning model for your own problems, and add it into your resume.  
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

export default Machine_Learning;