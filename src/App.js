import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Form from './Form'
const key_api='7bc280c159148dc2cbd0c44b49a6abf3'
class App extends Component {
  
  constructor(){
    const city=''
    super();
    this.state={
      temperature:undefined,
      Humidity: undefined,
      description:undefined,
      error:undefined,
      isValue:false
    }
  }
  
  getWeather= async (e)=>{
    e.preventDefault();
    this.city=e.target.elements.city.value
   const country=e.target.elements.country.value
    const API_CALL= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${country}&appid=${key_api}&units=metric`)
  //convert response into json format
  const api_json= await API_CALL.json();
  if(this.city && country  && api_json.main ){
    console.log(api_json)
      this.setState({
      temperature:api_json.main.temp,
      Humidity: api_json.main.humidity
    //used for 1st apprach
      //isValue:true
    })
  }
  }
  render() {
    return (
<div>
<Title/>
<Form city={this.city} getwather={this.getWeather} temp={this.state.temperature} isvalue={this.state.isValue} Humidity={this.state.Humidity} />
      </div>
    );
  }

}

export default App;
