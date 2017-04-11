import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;

//  const About = React.createClass({
//    componentDidMount(){  ///est
//      let node =  findDOMNode(this);  ///retourne tout le div.
//      TweenMax.from(node,1,{
//        opacity: 0,  x:  300,  scale: 1.5,
//        ease: Power4.easeInOut
//      })
//    },
//   render() {
//     return (
//
//         <h3>About component</h3>
//
//     )
//   }
// });

//stateless.

const About = (props) =>  {
   return (
     <div>
       <h3>About</h3>
       <p>Bienvenue sur la page a propos de nous</p>
     </div>

   )
 }




export default About
