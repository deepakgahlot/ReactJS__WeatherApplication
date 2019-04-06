import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


const Form =(props)=> {
    //1st approach 
   /* renderTemp(){
        if(this.props.isvalue){
           return <p>Temperature is : {this.props.temp}</p>
        }
           else{
            return null;
           }          
    } */
    return (
        <div>
     <form onSubmit={props.getwather}>
         <input type="text" placeholder="Enter city name" name='city'/>
         <input type="text" placeholder="Enter country name" name='country'/>
         <input type="submit" value="Click to find weather detail"/>
     </form>
       {/*this.renderTemp() */}
       {/* second approac ==> you can give condition in below way instead of setting bool value */ }
      {props.temp && props.Humidity && <p><i>The Temperature and Humidity of </i>
      {props.city} <i>are: </i>{props.temp}°C, {props.Humidity}% </p>}
     </div>
    );

}

Form.propTypes={
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default Form;