import React from "react";
import { Link, IndexLink } from 'react-router'

let style = {
  fontWeight: 400,
  fontFamily: 'NexaRegular'
}



const Nav = React.createClass({
  onSearch(e){
    e.preventDefault()
   let location = this.refs.search.value;
   let locationEncode = encodeURIComponent(location);

   if(location){
     this.refs.search.value = ''
     window.location.hash = '#/?location='+ locationEncode
   }
  },
  render() {
    return (
      <div>
        <br />      <br />

        <IndexLink to="/" className ="link" activeClassName ="active" activeStyle={style}>GET WEATHER</IndexLink>
        <Link to="/about" className ="link" activeClassName ="active" activeStyle={style}>ABOUT</Link>
        <Link to="/examples" className ="link" activeClassName ="active" activeStyle={style}>EXAMPLES</Link>
        <form onSubmit={this.onSearch} className="form-row">

          <input type="search" className="search" ref="search" placeholder='recherche la temperature'/>

          <button type="submit" className ="but" >ENVOYER</button>
        </form>
        {/* <a href="#/about"  className="link">A Link</a> */}
      </div>
    )
  }
});

//stateless
// const Nav = (props) => {
//   return (
//     <div>
//       <br />      <br />
//       <IndexLink to="/" className ="link" activeClassName ="active" activeStyle={style}>GET WEATHER</IndexLink>
//       <Link to="/about" className ="link" activeClassName ="active" activeStyle={style}>ABOUT</Link>
//       <Link to="/examples" className ="link" activeClassName ="active" activeStyle={style}>EXAMPLES</Link>
//
//       {/* <a href="#/about"  className="link">A Link</a> */}
//     </div>
//   )
// }

export default Nav
