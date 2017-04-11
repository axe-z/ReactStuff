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
       <h3>About component</h3>
   )
 }




export default About
