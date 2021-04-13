import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

// import Select from 'react-select';
import { Map, Marker, CircleMarker, Popup, TileLayer }  from 'react-leaflet';
import { Icon } from "leaflet";

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


class AI_Real extends Component {
	constructor(props) {
		super(props)
		this.state={

      house1: '22 Carolyn Avenue Carlingford NSW 2118',
      house1_img_url: 'img/house1.png',
      house1_option: '1',
      house1_latitude: -33,
      house1_longitude: 151,      

      house2: '7 Fleming Street Carlingford NSW 2118',
      house2_img_url: 'img/house2.png',      
      house2_option: '1',
      house2_latitude: -33.0001,
      house2_longitude: 151.003, 

      house3: '4 Ainslie Parade Carlingford NSW 2118',
      house3_img_url: 'img/house3.png',
      house3_option: '1',
      house3_latitude: -33,
      house3_longitude: 151,  

      house4: '28 Miamba Avenue Carlingford NSW 2118',
      house4_img_url: 'img/house4.png',
      house4_option: '1',
      house4_latitude: -33,
      house4_longitude: 151,  

      house5: '7 Philip Place Carlingford NSW 2118',
      house5_img_url: 'img/house5.png',
      house5_option: '1',
      house5_latitude: -33,
      house5_longitude: 151,  

      house6: '4 Kings Place Carlingford NSW 2118',
      house6_img_url: 'img/house6.png',
      house6_option: '1',
      house6_latitude: -33,
      house6_longitude: 151,  

      house7: '7 Pindari Avenue Carlingford NSW 2118',
      house7_img_url: 'img/house7.png',
      house7_option: '1',
      house7_latitude: -33,
      house7_longitude: 151,  

      house8: '42 Parkland Road Carlingford NSW 2118',
      house8_img_url: 'img/house8.png',
      house8_option: '1',
      house8_latitude: -33,
      house8_longitude: 151,  

      house9: '28 Norfolk Place Carlingford NSW 2118',
      house9_img_url: 'img/house9.png',
      house9_option: '1',
      house9_latitude: -33,
      house9_longitude: 151, 

      house10: '267 Pennant Hills Road Carlingford NSW 2118',
      house10_img_url: 'img/house10.png',
      house10_option: '1',
      house10_latitude: -33,
      house10_longitude: 151,

      House_No1_Latitude: -33.8688,
      House_No1_Longitude: 151.2093,  

      House_No2_Latitude: 0,
      House_No2_Longitude: 0, 

      House_No3_Latitude: 0,
      House_No3_Longitude: 0, 

      House_No4_Latitude: 0,
      House_No4_Longitude: 0, 

      House_No5_Latitude: 0,
      House_No5_Longitude: 0,                         

		}
	};

//  const position = [{this.state.house1_latitude}, {this.state.house1_longitude}];


	handleUsernameChange = (event) => {

		this.setState( {
			title: event.target.value
		})
	};

  handleOnChange = event => {

    const value = event.target.value;
  
    this.setState({

      [event.target.name]: value

    })

      
  }

	handleSubmit = event => {

    var entry = {
      house1: this.state.house1, 
      house1_option: this.state.house1_option,

      house2: this.state.house2,       
      house2_option: this.state.house2_option,

      house3: this.state.house3, 
      house3_option: this.state.house3_option,

      house4: this.state.house4,       
      house4_option: this.state.house4_option, 

      house5: this.state.house5,       
      house5_option: this.state.house5_option,

      house6: this.state.house6, 
      house6_option: this.state.house6_option,
      
      house7: this.state.house7,       
      house7_option: this.state.house7_option,

      house8: this.state.house8,       
      house8_option: this.state.house8_option,

      house9: this.state.house9, 
      house9_option: this.state.house9_option,
      
      house10: this.state.house10,       
      house10_option: this.state.house10_option,

    };                 




    fetch('/input', {
      method:"POST",
      credentials: "include",
      body: JSON.stringify(entry),
      cache: "no-cache",
      headers: new Headers({

        "content-type":"application/json"

      })
    })


    .then(response => response.json()).then(data => {


      this.setState({

        House_No1_Latitude: data.House_No1_Latitude,
        House_No1_Longitude: data.House_No1_Longitude,

        House_No2_Latitude: data.House_No2_Latitude,
        House_No2_Longitude: data.House_No2_Longitude,

        House_No3_Latitude: data.House_No3_Latitude,
        House_No3_Longitude: data.House_No3_Longitude,

        House_No4_Latitude: data.House_No4_Latitude,
        House_No4_Longitude: data.House_No4_Longitude,

        House_No5_Latitude: data.House_No5_Latitude,
        House_No5_Longitude: data.House_No5_Longitude,                


//      House_No2_Latitude: data.House_No2_Latitude,
//      House_No2_Longitude: data.House_No2_Longitude,

//      House_No3_Latitude: data.House_No3_Latitude,
//      House_No3_Longitude: data.House_No3_Longitude,

//      House_No4_Latitude: data.House_No4_Latitude,
//      House_No4_Longitude: data.House_No4_Longitude,

//      House_No5_Latitude: data.House_No5_Latitude,
//      House_No5_Longitude: data.House_No5_Longitude,            

      })
    });

    event.preventDefault()
  }



	render (){

		return( 

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


        <section id = "AI_Real" style = {{ background: "#efefef", paddingTop: "20px", paddingBottom: "100px"}}>


            <div className="container" style = {{marginTop: "2em"}}>
              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Smart Real </h2>
                <div className = "project-content"> 
                Buying and renting a house/apartment can be very time consuming and energy taking. Although there are several real estate website available, overloading information and data confused people and bring additional difficulties in decision making. In this project you will have chance developing a AI recommendation system helping people find the most suitable properties.
                
                </div>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/real-estate.png" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em"}}/>  
                  </div>

              </div>
                

              </div>
            </div>

          <div className="container">


          <h1 style = {{marginTop: "2em"}}>  Showcase </h1>



          <form className="contact-form" onSubmit={this.handleSubmit}>

          <div className="row  project-showcase" style = {{padding: "10px"}}>

                <div className = "col-md-6">
                    
                      <div className="form-group" >
                         <img src={this.state.house1_img_url} style = {{height: "400px"}} className="d-block w-100" alt="..."/>                        
                        <label style = {{padding: "30px"}}> {this.state.house1} </label>
                        <select  name= "house1_option" value = {this.state.house1_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div> 

                </div>


                <div className = "col-md-6">

                      <div className="form-group">
                         <img src={this.state.house2_img_url} style = {{height: "400px"}} className="d-block w-100" alt="..."/>                       
                        <label style = {{padding: "30px"}}> {this.state.house2} </label>
                        <select name= "house2_option" value = {this.state.house2_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>
                </div>


                <div className = "col-md-6">

                      <div className="form-group">
                         <img src={this.state.house3_img_url} style = {{height: "400px"}} className="d-block w-100" alt="..."/>                       
                        <label style={{padding: "30px"}}> {this.state.house3} </label>
                        <select name= "house3_option" value = {this.state.house3_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>

                </div>


                <div className = "col-md-6">

                      <div className="form-group">
                         <img src={this.state.house4_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house4} </label>
                        <select name= "house4_option" value = {this.state.house4_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>

                </div>


                <div className = "col-md-6">
                      <div className="form-group">
                         <img src={this.state.house5_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house5} </label>
                        <select name= "house5_option" value = {this.state.house5_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>

                </div>


                <div className = "col-md-6">

                      <div className="form-group">
                         <img src={this.state.house6_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house6} </label>
                        <select name= "house6_option" value = {this.state.house6_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>
                </div>


                <div className = "col-md-6">
                      <div className="form-group">
                         <img src={this.state.house7_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house7} </label>
                        <select name= "house7_option" value = {this.state.house7_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>

                </div>


                <div className = "col-md-6">

                      <div className="form-group">
                         <img src={this.state.house8_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house8} </label>
                        <select name= "house8_option" value = {this.state.house8_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>
                </div>


                <div className = "col-md-6">
                      <div className="form-group">
                         <img src={this.state.house9_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                        <label style={{padding: "30px"}}> {this.state.house9} </label>
                        <select name= "house9_option" value = {this.state.house9_option} onChange={this.handleOnChange}>
                          <option value='1'>Like</option>
                          <option value='0'>Dislike</option>
                        </select>
                      </div>
                </div>


                <div className = "col-md-6">

                  <div className="form-group">
                     <img src={this.state.house10_img_url} style = {{height: "400px"}}  className="d-block w-100" alt="..."/>              
                    <label style={{padding: "30px"}}> {this.state.house10} </label>
                    <select name= "house10_option" value = {this.state.house10_option} onChange={this.handleOnChange}>
                      <option value='1'>Like</option>
                      <option value='0'>Dislike</option>
                    </select>
                  </div>

                </div>  


            <div className = "col-md-6">

              <button type="submit" className="btn btn-primary">Submit</button> 

            </div> 


          </div>          

          </form>

            <div style={{padding: "10px"}}>

              <h2 style={{ textAlign: "center", color: "blue"}}> Please find the recommended houses below: </h2>                        

              <Map
                style={{ height: "480px", width: "100%" }}
                zoom={12}
                center={[this.state.House_No1_Latitude, this.state.House_No1_Longitude]}>
                <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <CircleMarker center={[this.state.House_No1_Latitude, this.state.House_No1_Longitude]}/>
                <CircleMarker center={[this.state.House_No2_Latitude, this.state.House_No2_Longitude]}/>
                <CircleMarker center={[this.state.House_No3_Latitude, this.state.House_No3_Longitude]}/>
                <CircleMarker center={[this.state.House_No4_Latitude, this.state.House_No4_Longitude]}/>
                <CircleMarker center={[this.state.House_No5_Latitude, this.state.House_No5_Longitude]}/>


              </Map>

            </div>
          </div>


        </section>

      
      </div>

     );

	}
}

export default AI_Real;