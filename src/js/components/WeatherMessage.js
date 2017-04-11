import React from "react";

// const WeatherMessage = React.createClass({
//
//   render() {
//       let {temp, location} = this.props  //destructurer
//     return (
//       <div className='weather'>
//         <p>Il fait {temp} à {location}</p>
//       </div>
//     )
//   }
// });

//stateless.
const WeatherMessage = ({temp, location}) => {
  return (
    <div className='weather'>
      <p>Il fait {temp} à {location}</p>
    </div>
  )
}

export default WeatherMessage
