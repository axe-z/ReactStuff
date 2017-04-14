import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;

 const About = React.createClass({
   componentDidMount(){  ///est
     let node =  findDOMNode(this);  ///retourne tout le div.
     TweenMax.from(node,1,{
       opacity: 0,  x:  300,  scale: 1.5,
       ease: Power4.easeInOut
     })
   },
  render() {
    return (
    <div>
      <h2>About</h2>
      <p>Bienvenue sur la page a propos de nous</p>
      <p>app creer avec:</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> -Est le framework utilise.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather</a> -Est l'api utilise.
        </li>
      </ul>
    </div>


    )
  }
});

//stateless.

// const About = (props) =>  {
//    return (
//      <div>
//        <h3>About</h3>
//        <p>Bienvenue sur la page a propos de nous</p>
//      </div>
//
//    )
//  }




export default About
