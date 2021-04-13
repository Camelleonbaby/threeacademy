import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

class AI_Writer extends Component {
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

		<div className="AI_Writer">

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
                    <h5> Life Long Learning </h5>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Smart Business Decision Making </h5>
                  </div>          
              </div>
              <div className="carousel-item">
                <img src="img/banner3.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption">              
                    <h5> Extract knowledge and Benifit from Data </h5>
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


        <section id = "AI_Writer" style = {{ paddingTop: "20px", paddingBottom: "100px"}}>



            <div className="container" style = {{marginTop:'2em'}}>

              <div className="row  project-showcase">
                <div className = "col-md-6">
                <h2> Smart Writer </h2>
                <div className = "project-content"> 
                We are facing writing tasks everyday. However, writing is not easy, even for a professional writer. A good writing plan consists of four steps: literature review, outline development, first draft and final polishing. On the basis of the most powerful NLP model, you will have chance developing a series of writing assistants to provide the best writing experience. 
                
                </div>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/AI-writer.jpg" className="img-responsive" style = {{paddingRight: "10em"}} />  
                  </div>

              </div>
                

              </div>

          </div>



          <div className="container">          

          <h1 style = {{marginTop:'2em'}}> Showcase </h1>

        	<form className="contact-form" onSubmit={this.handleSubmit} style = {{marginTop:'2em'}}>

            <div className="row">
                <div className="col-md-6">

                		<div className="form-group">
                			<label style = {{fontSize: "20px", fontWeight: "bold"}}>Please give a title for your essay.</label>
                			<div className = "essay-title" >
                				<input style = {{width: '100%', padding: "10px"}} type = 'text' value = {this.state.title} onChange={this.handleUsernameChange} />
                			</div>
                		</div>

                		<div>
                			<label className = "text-center" style = {{fontSize: "20px", fontWeight: "bold"}}>Please provide a few seed sentences. </label>
                			<div>
                				<textarea  style = {{width: '100%', height: '185px', padding: "10px"}} value = {this.state.seed} onChange={this.handleSeedChange} />
                			</div>
                		</div> 

                		<button type="submit" className="btn btn-primary">Generate</button>

                  </div>

                <div className="col-md-6">
                		<div>
                			<label className = "text-center" style = {{fontSize: "20px", fontWeight: "bold", color: 'red'}}> Generated Text: </label>
                			<div>
                				<textarea  style = {{width: '100%', height: '300px', padding: "10px"}} value = {this.state.text}  />
                			</div>
                		</div> 
                  </div>

                </div>
               		
        	</form>

          </div>

        </section>
      
      </div>

     );

	}
}

export default AI_Writer;