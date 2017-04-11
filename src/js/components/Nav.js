import React from "react";
import { Link, IndexLink } from 'react-router'

let style = {
  fontWeight: 400,
  fontFamily: 'NexaRegular'
}

//  const Nav = React.createClass({
//   render() {
//     return (
//    <div>
//      <br />      <br />
//      <IndexLink to="/" className="link" activeClassName="active" activeStyle={style}>GET WEATHER</IndexLink>
//      <Link to="/about" className="link" activeClassName="active" activeStyle={style}>ABOUT</Link>
//      <Link to="/examples" className="link" activeClassName="active" activeStyle={style}>EXAMPLES</Link>
//
//      {/* <a href="#/about"  className="link">A Link</a> */}
//    </div>
//
//     )
//   }
// });

//stateless
const Nav = (props) => {
  return (
 <div>
   <br />      <br />
   <IndexLink to="/" className="link" activeClassName="active" activeStyle={style}>GET WEATHER</IndexLink>
   <Link to="/about" className="link" activeClassName="active" activeStyle={style}>ABOUT</Link>
   <Link to="/examples" className="link" activeClassName="active" activeStyle={style}>EXAMPLES</Link>

 </div>

  )
}

export default Nav
