import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import { Link, IndexLink } from 'react-router'

 const Examples = React.createClass({
   componentDidMount(){  ///est
     let node =  findDOMNode(this);  ///retourne tout le div.
     let list = node.children[2];
      let listArr = list.children //html collection
      let arr = [...listArr]  ///pour transformer en array mais pas vraiiiment
      //console.log(arr)
     TweenMax.from(node,1,{
       opacity: 0,  x:  150,  scale: 1.2,
       ease: Power4.easeInOut
     })

     arr.forEach(function (item, i){
    //  console.log(item + ' ' + i)
     })

     TweenMax.from(list,2,{
       opacity: 0,  x:  180,
       ease: Power4.easeInOut
     })

   },
  render() {
    return (
       <div>
         <h3>Examples</h3>
         <p>Bienvenue</p>
         <ul>
           <li>
             <Link to="/?location=Montreal">Montreal, Qc</Link>
           </li>
           <br />
           <li>
             <Link to="/?location=Quebec">Quebec, Qc</Link>
           </li>
         </ul>
       </div>
    )
  }
});

export default Examples
///&units=metric
//606c997356f79caf9896e3c4a7aa3854
