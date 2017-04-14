import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import {getTemp} from '../api/openWeatherMap'
import ErrorModal from './ErrorModal';

//=================================================================================================================================
//Video 35 a

 const Weather = React.createClass({
   getInitialState(){
     return {
     isLoading: false,
     errorMessage: false
     }
   },
   componentWillMount(){  //avant de loader

   },
   componentDidMount(){  ///au moment de loader
     let node =  findDOMNode(this);  ///retourne tout le div.
     TweenMax.from(node,0.8,{
       opacity: 0,  x:  20,  scale: 1.5,
       ease: Power4.easeInOut
     })

   },
   handleSearch(location){
    location = _.capitalize(location); //formater cute. ajuste tous les lettres sauf 1ere maj.
    this.setState({
      isLoading : true,
      errorMessage: false
    })
    getTemp(location).then(temp => {
      //console.log(temp)

        this.setState({
          location: location,
           temp: temp,
           errorMessage: false,
           isLoading: false
         })
     throw 'fuck'
    }).catch( e => {
    // console.log(typeof e)
      this.setState({
         isLoading: false,
         errorMessage: true,  //CA MARCHE MIEUX DE MEME, NE CHANGE PAS
       })
    })
   },
render() {
    let {isLoading, temp, location, errorMessage} = this.state //destructurer, plus facile apres.

    function renderMessage() {    //fonction pour determiener si le text va en bas,
        if (isLoading) {
            return <h3>Recherche du data de temperature...</h3>;  //text de recherche
        } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp}/>;  //resultat
        }
    }

     function renderError() {
      if( errorMessage){
     return <ErrorModal  />
      }
     }

    return (
        <div className='weather'>
          <h1>Rechercher la temperature</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}  {/* function selectionne ce qui va sortir  */}
          {renderError()}

        </div>
    )
}
});






//=================================================================================================================================
//Video 33 a 35
// console.log(getTemp)
//  const Weather = React.createClass({
//    getInitialState(){
//      return {
//       location: 'Miami',
//       temp: 20
//      }
//    },
//    componentDidMount(){  ///est
//      let node =  findDOMNode(this);  ///retourne tout le div.
//      TweenMax.from(node,0.8,{
//        opacity: 0,  x:  20,  scale: 1.5,
//        ease: Power4.easeInOut
//      })
//    },
//    handleSearch(location){
//     location = _.capitalize(location); //formater cute. ajuste tous les lettres sauf 1ere maj.
//     getTemp(location).then(temp => {
//       console.log(temp)
//       this.setState({
//         location: location,
//          temp: temp
//         })
//     }).catch( errMessage => {
//       console.log(errMessage)
//     })
//    },
//   render() {
//     let {temp, location} = this.state //destrutrer, plus facile apres.
//     return (
//       <div className='weather'>
//         <h1>Weather component</h1>
//         <WeatherForm onSearch={this.handleSearch}/>
//         <WeatherMessage location={location} temp={temp} />
//       </div>
//     )
//   }
// });

export default Weather
