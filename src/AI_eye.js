import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

class Al_eye extends Component {

state = {

    selectedFile: null,
    selectedFileURL: 'logo512.png',
    analysisImage: null
  }

  fileSelectedHandler = event => {

    
    
    console.log(event.target.files[0]);

    this.setState({

      selectedFile: event.target.files[0],
      selectedFileURL: URL.createObjectURL(event.target.files[0])   
      
    });

  }

  fileUploadHandler = event => {

    const fd = new FormData();
    fd.append('file', this.state.selectedFile);
//    axios.post('')


    fetch('/Crack_prediction', {
      method:"POST",
      body: fd,
    })

  }

  render() {

  return (

  <div className="AI_real">

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
                    <h5>  Smarter Business Decisions  </h5>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5>  Smarter Business Decisions  </h5>
                  </div>          
              </div>
              <div className="carousel-item">
                <img src="img/banner3.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5>  Smarter Business Decisions  </h5>
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


        <section id = "AI_Eye" style = {{ background: "#efefef", padding: "50px"}}>

            <div className="container" style = {{marginTop: "2em"}}>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Third Eye </h2>
                <div className = "project-content"> 
                   Experienced structural engineers can identify risk via surface crack pattern. Medical specialties can recognise a particularly disease via a chest radiograph. In this project you will have chance developing computer vision models with superior human performance in particular fields. They will be your third eye in solving problems.
                
                </div>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/AI-Camera.png" className="img-responsive" style = {{paddingRight: "10em"}}/>  
                  </div>

              </div>

          </div>

          <div className="container" style = {{marginTop: "4em"}}>

          <h1>  Showcase </h1>

          <div className="AI_Eye">



            <div className="row">
                <div className="col-md-6">

                <h3 style = {{ paddingTop: "20px" }}> Please upload your image for analysis: </h3>
                  <div>
                  <input type = "file" onChange = {this.fileSelectedHandler} />
                  </div>

                  <div>
                     <img style = {{height: "500px", width: "500px", paddingTop: "20px"}} src={this.state.selectedFileURL} alt = "logo"/>
                  </div>

                </div>


                <div className="col-md-6">

                  <div style = {{ paddingTop: "20px" }}>
                    <button onClick = {this.fileUploadHandler} className="btn btn-primary"> Start Analysis </button>
                    <p style = {{paddingTop: "5px"}}> This image indicates the postions of crack. </p>
                  </div>

                  <div>
                     <img style = {{height: "500px", width: "500px", paddingTop: "10px"}} src="img/outfile_1.jpg" alt = "logo"/>
                  </div>

                </div>

            </div>

            </div>
          </div>
        </div>
      </section>

  </div>

  );


  }
 }

 export default Al_eye;

