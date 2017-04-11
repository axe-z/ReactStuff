import React from "react";


const GreeterMessage = React.createClass({
   render() {
  let name = this.props.name
  let message = this.props.message;
     return  (
      <div>
        <h1>Bonjour {name} !</h1>
        <p>{message} !!</p>
      </div>
     )
    }
})


export default GreeterMessage
