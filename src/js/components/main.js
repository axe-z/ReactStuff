import React from "react";
import  Nav  from './Nav'

// const Main = React.createClass({
//   render() {
//    //console.log(this.props.children)
//     return (
//       <div>
//         <Nav />
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// });

//stateless
const Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main component</h2>
      {props.children}
    </div>
  )
}

  export default Main
