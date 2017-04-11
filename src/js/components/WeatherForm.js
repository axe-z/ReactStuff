import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


const WeatherForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();
    let location = this.refs.location.value
    if(location){   ///si y a quelque chose
this.refs.location.value = "";  ///reset de l input
console.log('parti') //check si ca marche
this.props.onSearch(location) //lance a l autre module
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Entrez le nom de la ville" className="inputW"/>
          <br />
          <button type="submit" className="submit">Temperature</button>
        </form>
      </div>
    )
  }
});


export default WeatherForm
