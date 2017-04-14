import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import  Nav  from './Nav'

const Main = React.createClass({

  componentDidMount(){  ///est
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.from(node,1,{
      opacity: 0,  x:  300,  scale: 1.5,
      ease: Power4.easeInOut
    })
    //console.log(this.props.children.props)
      //console.log(ReactDOM)

  //  console.log(React)
    // console.log({this})
  },
  render() {

    return (
      <div>
        <Nav />
        <h2>Main component</h2>
        {this.props.children}
      </div>
    )
  }
});

//stateless
// const Main = (props) => {
//   return (
//     <div>
//       <Nav />
//       <h2>Main component</h2>
//       {props.children}
//     </div>
//   )
// }

  export default Main
