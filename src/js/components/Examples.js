import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;

 const Examples = React.createClass({
   componentDidMount(){  ///est
     let node =  findDOMNode(this);  ///retourne tout le div.
     TweenMax.from(node,1,{
       opacity: 0,  x:  150,  scale: 1.2,
       ease: Power4.easeInOut
     })
   },
  render() {
    return (
       <div>
         <h3>Examples</h3>
         <p>Bienvenue</p>
       </div>
    )
  }
});

export default Examples
///&units=metric
//606c997356f79caf9896e3c4a7aa3854
