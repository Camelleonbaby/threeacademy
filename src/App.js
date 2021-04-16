import React from 'react';
import AI_Writer from './AI_Writer';
import AI_Real from './AI_Real';
import AI_eye from './AI_eye';
import Data_Scraping  from './Data_Scraping' ;
import Data_Visualization from './Data_Visualization'
import Machine_Learning from './Machine_Learning'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link as LinkPage} from 'react-router-dom' ;

import { Link, animateScroll as scroll } from "react-scroll";



import Amplify, { API } from 'aws-amplify';


Amplify.configure({
    // OPTIONAL - if your API requires authentication 

    API: {
        endpoints: [
            {
                name: "draha_real_api",
                endpoint: "https://cghis7nlyb.execute-api.us-east-1.amazonaws.com/prod"
            },

        ]
    }
});


class App extends React.Component {
  
  render (){
    return (
    <Router>  
      <Switch>

      <Route path="/aiwriter" component = {AI_Writer} />
      <Route path="/aireal" component = {AI_Real} />
      <Route path = "/data-scraping" component = {Data_Scraping} /> 
      <Route path = "/data-visualization" component = {Data_Visualization} /> 
      <Route path = "/machine-learning" component = {Machine_Learning} />            
      <Route path="/aieye" component = {AI_eye} />      

      <div className="App">



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


        <section id = "about">
          <div className="container">
            <div className="row">
              <div className = "col-md-6">
                <h2> About Us</h2>
                <div className = "about-content"> 
                    We’re a team of data scientists, data engineers, educators, machine learning experts, and more, working together to provide a better learning environment of DATA SCIENCE and ENGINEERING for COLLEGE STUDENT, CAREER STARTER and CONTINUOUS LEARNER. To this end, we develop a series of learner-centered training courses  covering data collection, data visualisation and analysis, and data modelling (Machine Learning). We also provide industrial level hand-on projects for the learners to practice their skills and gain industry experience. 
                
                </div>


              </div>

                <div className = "col-md-6 skills-bar">

                 <img src="img/wordcloud.jpg" className="d-block w-100" style = {{paddingTop: "1em"}} alt="..." /> 
 

              </div>
            </div>
          </div>
        </section>


        <section id="services" style={{backgroundImage: "url(img/services.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"}}>
          <div className="container">     
            <h1>Our Courses</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-database"></i>            
                </div>
                <LinkPage to= '/data-scraping'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Data Collection </h4> </button></LinkPage>
                <p> You will build your own data piplines and learn the basis of Python and website. </p>

              </div> 


              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-line-chart"></i>          
                </div>

                <LinkPage to= '/data-visualization'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Data Visualization </h4> </button></LinkPage>
                <p> You will build your own databorads with various data visualization techniques.  
                </p>
              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-cogs"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Machine Learning </h4> </button></LinkPage>
                <p> You will build your own ML models for solving critical business problems.   
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-industry"></i>      
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Industrial Data Project Training </h4> </button></LinkPage>
                <p> You will get involved in a real industrial data project and gain hand-on experience.  
                </p>

              </div> 
            </div>
          </div>
        </section>




          <section id="project">

            <div className="container" >

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Data Collection </h2>
                <div className = "project-content"> 
                    This is a four-week short course (8 hours of lectures + 4 hours of one-on-one instruction), which involves data collection and cleaning techniques. Target learners are undergraduates/graduates and career beginners who want to find a job in the field of data science but don’t know how to start. In this course, you will use Python to build your own data pipeline, including scraping data from websites, cleaning data, and loading data into SQL databases. You will learn the basics of Python, HTML and webApp technology.                
                </div>

                <LinkPage to= '/data-scraping'><button type="button" className = "btn btn-primary"> More Info </button></LinkPage>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/datascraping.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "2em"}}/>  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6">
                <h2> Data Visualization </h2>
                <div className = "project-content"> 
                  This is a four-week short course (8 hours of lectures + 4 hours of one-to-one instruction). The content involves the theory and technology of data visualization. The target learners are undergraduates and graduate students, as well as professional beginners who are interested in data visualization and data analysis. In this course, you will develop your own data dashboard using Python, PowerBI and Tableau. You will learn the basics of data visualization, the best strategies for visualizing various data types, and related programming and software skills.             
                </div>

                <LinkPage to= '/data-visualization'><button type="button" className = "btn btn-primary">  More Info  </button></LinkPage>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/datavisualization.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "2em"}} />  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Machine Learning </h2>
                <div className = "project-content"> 

                    This is a four-week short course (8 hours of lectures + 4 hours of one-to-one instruction). The content involves the essence and best practices of machine learning algorithms. The target learners are undergraduates, graduate students and career beginners who are interested in developing their own machine learning models. In this course, you will learn the basics of machine learning and strategies for developing machine learning models.             
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" >  More Info  </button></LinkPage>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/machinelearning.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "2em"}}/>  
                  </div>

              </div>
                
              </div>



            </div>
          </section>


        <section id="services" style={{backgroundImage: "url(img/Project_Background.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"}}>
          <div className="container">     
            <h1>Data Projects</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-building"></i>            
                </div>
                <LinkPage to= '/aireal'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> RealSmart </h3> </button></LinkPage>
                <p> In this project you will have chance developing a AI recommendation system helping people find the most suitable properties. </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-eye"></i>          
                </div>

                <LinkPage to= '/aieye'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Third Eye </h3> </button></LinkPage>
                <p> In this project you will have chance developing computer vision models with superior human performance in particular fields.   
                </p>

              </div> 


              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-pencil"></i>          
                </div>
                <LinkPage to= '/aiwriter'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Smart Writer </h3> </button></LinkPage>

                <p> In this project you will have chance developing a series of writing assistants to provide the best writing experience. 
                </p>
              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fas fa-volume-up"></i>          
                </div>
                <LinkPage to= '/'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Third Ear </h3> </button></LinkPage>

                <p> In this project you will have chance developing machine learning models for time-series data.     
                </p>

              </div> 

 
            </div>
          </div>
        </section>


          <section id="team">

            <div className="container">
              <h1>Instructors</h1>
              <div className="row">
                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weidong.jpg" className="img-responsive"/>
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weidong LIU</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Chief Instructor </h3>
                    <p> Weidong is a AWS certified machine learning specialty, and a full-stack machine learning APP developer.</p>

                </div>


                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/weixing.jpg" className="img-responsive"/>
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Weixing XU</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Guest Instructor </h3>
                    <p> Weixing is a senior data scientist. He has rich experience in handling big data and slove business problems.</p>

                </div>

                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/chuhan.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Chuhan WU</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Guest Instructor </h3>
                    <p> Chuhan is an experienced data scientist. He is an expert in the application of computer vison in industrical process.</p>

                </div>

                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/zhonghuai.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Zhonghuai WU</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Guest Instructor </h3>
                    <p> Zhonghuai has rich expeirence in data processing and analysis. He is also an expert in numerical simulation. </p>

                </div>


                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/wuqi.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Dr Qi WU</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Guest Instructor </h3>
                    <p> Qi is an experienced data scientist and mechanical engineer. He has both academic and industrial backgroud.</p>

                </div>

                <div className="col-md-4 profile-pic text-center">
                  <div className="img-box">
                    <img src="img/haiyang.jpg" className="img-responsive" />
                  <ul>
                    <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i className="fa fa-linkedin"></i></li></a>   
                  </ul>

                </div>
                    <h2>Mr Haiyang ZHAO</h2>
                    <h3 style = {{color: "grey", fontSize: "1.2em"}}> Guest Instructor </h3>
                    <p> Haiyang is an experienced data engineer and software developer. He is also a PhD Candidate at UNSW.</p>

                </div>


              </div>

            </div>

          </section>


          <section id="promo" style={{backgroundImage: "url(img/course.jpg)"}}>

            <div className="container">

            <p> Get Free Trail of Data Science/Artificial Intelligence Training Courses.</p>

            <Link type="button" className = "btn btn-primary" style = {{color: "white"}} to="contact" spy={true} smooth={true} offset={-70} duration={500}> Contact Us </Link>

            </div>

          </section>


          <section id="testimonials" >
            <div className="container">
              <h1> Testimonials </h1>
              <p className="text-center"> Find more reviews on our YouTube channel. </p>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <blockquote> The data courses developed by Three Academy help me start my creer in the field of Data Science  </blockquote>

                    <h3> Allen  </h3>          

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <blockquote> I learned a lot from the industrail data projects. The Instructor is knowledgable and friendly </blockquote>

                    <h3> Frank  </h3>           

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <blockquote>Three Academy has the best teachers in the field of data science and machine learning. I love the learning environment.</blockquote>

                    <h3> Nick </h3>           

                  </div>
                  
                </div>                  
              </div>
            </div>
          </section>


          <section id="contact">
            <div className="container">
              <h1>Get In Touch</h1>
              <div className="row">
                <div className="col-md-6">
                  <form className="contact-form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="5" placeholder="Your Message"></textarea> 
                    </div>

                    <button type="submit" className="btn btn-primary">SEND MESSAGE</button>

                  </form>
                  
                </div>
                
                <div className="col-md-6 contact-info">
                  <div className="follow"><b>Address:</b><i className="fa fa-map-marker"></i>116 Oakes Rd, Carlingford, NSW, Australia </div>           

                  <div className="follow"><b>Phone:</b><i className="fa fa-phone"></i> (+61) 0411 202 887 </div>            
                
                  <div className="follow"><b>Email:</b><i className="fa fa-envelope-o"></i>drahadataai@gmail.com </div>  

                  <div className="follow" style = {{padding: "15px"}}><label><b>Get Social:</b></label>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>

                  </div>                      
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

      </Switch>
    </Router>


    );    
  }
}

export default App;
