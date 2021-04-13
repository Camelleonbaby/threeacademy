import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './Data_Visualization.css';

class Data_Visualization extends Component {
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

		<div className="Data_Visualization">


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

          <h1 style = {{color: "black", fontsize: "bold"}}> Data Visualization Training Course </h1>

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
                      This is a four-weeks (8h lecture + 4h one-to-one instruction ) short course on the theory and techniques of data visualization. The target learners are undergraduate and postgraduate students who has interet in effectively visulizing data and analyzing data. In this course, you are going to develop your own data dashbord using Python, PowerBI and Tableau. You will learn the theoratical foundation of data visualization, the best strategies of visualizing various data types and the related programming and software skills. We are also going to invite Guest Instructors from Industry. 
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
                    <h4> Lesson 1: Why data visualization is important </h4> 
                    <p> In this lesson, you will understand why data visualization is so important, the underlying visualization theory and the best data visualzation works </p> 
                  </li>

                  <li> 
                    <h4> Lesson 2: Best Visualization strategies for various data types - part 1 </h4> 
                    <p> In this lesson, you will learn commonly-used data types and the best strategies of visulizing them using Python, PowerBI and Tableau. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 3: Best Visualization strategies for various data types - part 2 </h4> 
                    <p> In this lesson, you will learn special data types (map, network etc) and the best strategies of visulizing them using Python, PowerBI and Tableau. </p> 
                  </li>

                  <li> 
                    <h4> Lesson 4: Developing your own data dashbord </h4> 
                    <p> In this lesson. ultilizing the skills and kwowledge learned from the previous lessons, you will develop your own data dashbord.  </p> 
                  </li>

 
                </ul>

              </div>
                
        </div>



        </section>

        <section id="services" style={{backgroundImage: "url(img/Data_Scraping_Outcome.jpeg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))", marginTop: "5em", fontColor: "black"}}>
          <div className="container">     
            <h1 style = {{color: "black"}} > Learning Outcomes </h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <h3 style = {{color:"white", paddingTop: "1em"}}> New Skills </h3>
                <p style = {{color:"white"}}> You will be equipped with the basic knowledge of data visualizaton and skills of Python, PowerBI and Tableau.  </p>

              </div> 

              <div className="col-md-3 text-center" style = {{color:"white"}}>

                <h3 style = {{paddingTop: "1em"}}> New Vision </h3>
                <p style = {{color: "white"}}> You will gain new vision about data science and data scientist as a career, and explore more opportunities. 
                </p>

              </div> 

              <div className="col-md-3 text-center">

                <h3 style = {{color:"white", paddingTop: "1em"}}> Your own project </h3>
                <p style = {{color:"white"}}> You will develop your own data dashbord, and add it into your resume.  
                </p>
              </div> 

              <div className="col-md-3 text-center" style = {{color:"white"}}>

                <h3 style = {{paddingTop: "1em"}}> Partnership </h3>
                <p style = {{color:"white"}}> You will meet and cooperate with smart students from various backgrounds, and build possible partership for the future.   
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

export default Data_Visualization;