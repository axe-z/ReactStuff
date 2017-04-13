/*jslint browser: true, devel: true, node: true, sloppy: true, stupid: true, sub: true, unused:false, unparam: true, "esnext": true, esversion: 6, -W008, -W030, -W033, -W117 */
"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////
///
///                        ///UI/UX/////                                                  ////
///
///////////////////////////////////////////////////////////////////////////////////////////////

///AMENER LE SCSS
//import css from '../css/app.scss'
 import css2 from '../css/main.scss';
//OU
//const css = require('../css/app.scss');

//IMPORT DE JQUERY ET GSAP
//jquery est amené par webpack dans le webpack.config.js
//let $ = $;
///TWEENMAX
import TweenMax from '../../node_modules/gsap/src/minified/TweenMax.min.js';
//OU
//var TweenMax = require('../../node_modules/gsap/src/minified/TweenMax.min.js');

///LOADASH
//import loadash from '../../node_modules/lodash/lodash.min';
//OU
//var _ = require('../../node_modules/lodash/lodash.min');
//mais a la fin, pu besoint d utiliser _.throttle mais juste throttle
// var throttle = require('lodash/throttle');
// var capitalize = require('lodash/capitalize');

///SCROLLTOPLUGIN
//var scrollToPlugin = require('../../node_modules/gsap/src/minified/plugins/ScrollToPlugin.min');
//require('./smoothScroll.js');

///AMELIORE LE LOOK DU RELOAD
let body = $('body');
TweenMax.set(body, {
  x: 150,
  // scale: 1.5,
  opacity: 0,
});

TweenMax.set($('.notes'), {
  x: 0,
  // scale: 1.5,
  opacity: 0,
});


TweenMax.to(body, 2, {
    x: 0,
    // scale: 1,
  opacity: 1,
  ease: Power4.easeOut
});
TweenMax.to($('.notes'), 2, {
    x: 0,
    // scale: 1,
  opacity: 1,
  ease: Power4.easeOut
});

///////////////////////////////////////////////////////////////////////////////////////////////
///
///                        ///UI/UX/////                                                  ////
///
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///
///                        ///flex-box/////                                              ////
///
///////////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
const { createElement } = React;
const { render, findDOMNode  } = ReactDOM;
const { Component } = React
//import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import _ from 'lodash';
 require('bootstrap-sass')


//=================================================================================================================================
//video 26 Routing pour plusieurs pages

//on aura un main, nav et page component

import Main  from './components/main'
import Weather from './components/Weather'
import About from './components/About'
import Examples from './components/Examples'
import { Perdu } from './components/Whoops404'


render (
 <Router history={hashHistory}>
   <Route path="/"  component={ Main }>
     <Route path="about" component={About} />
     <Route path="examples" component={Examples} />
     <IndexRoute component={Weather} />
     <Route path="*" component={Perdu} />
   </Route>

 </Router>
 ,document.getElementById('MainInterface')
)


//=================================================================================================================================

//=================================================================================================================================
//video 32 Promises
//
// function addPromesse(a,b){
//  return new Promise((res,rej) => {
//    if ((typeof a === 'number') && (typeof b === 'number')) {
//         res( a + b)
//    } else {
//      rej (' erreur')
//    }
//  }) ;
// }
//
// addPromesse(2,21).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })
//
// addPromesse(2,"b").then(data => {
//   console.log(data)
// }).catch( err => {
//   console.log('oups' + err )
// })



//Avec Promises
// function getPromise(location){
//   return new Promise((resolve, reject) => {
//       setTimeout(function (){
//        resolve(30);
//        reject('Ville non-trouvee')
//       },2000)
//
//   });
// }
//
// getPromise("Mtl").then((data) => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })






//CB ouach CACA
// function avecCallback(location, callback){
// //  callback(undefined, 30);
//   callback('Ville non-trouvee')
// }
//
// avecCallback('Montreal', function (err, result){
//    if(err){
//      console.log('erreur', err)
//    } else {
//      console.log('bravo', result)
//    }
// });










//=================================================================================================================================







//=================================================================================================================================
//video 25

// let objOne = {
//   name: 'Ben',
//   location: "Mtl"
// }
//
// let objTwo = {
//   age: 39,
//   ...objOne   //extensiation
// }
//
// console.log(objTwo) //Object {age: 39, name: "Ben", location: "Mtl"}

// render (
//  <h1>Boilerplate react!</h1>,
//    document.getElementById('MainInterface')
// )


//=================================================================================================================================




//=================================================================================================================================
//video 23 et 24 webpack boilerplate
//=================================================================================================================================

//=================================================================================================================================

//VIDEO 22 division par folder component des fichiers

// import GreeterForm from './components/GreeterForm'
// import GreeterMessage from './components/GreeterMessage'  //sont importe dans greeter
// import Greeter from './components/Greeter'
//
// render (
//  <Greeter />,
//    document.getElementById('MainInterface')
// )

//=================================================================================================================================






//=================================================================================================================================
//VIDEO 17 a 22 sont sur webpack
//=================================================================================================================================

//
// //=================================================================================================================================
//
// //VIDEO 16 Plus sur les props et state.
//
// const GreeterMessage = React.createClass({
//    render() {
//   let name = this.props.name
//   let message = this.props.message;
//      return  (
//       <div>
//         <h1>Bonjour {name} !</h1>
//         <p>{message} !!</p>
//       </div>
//      )
//     }
// })
//
//
// const GreeterForm = React.createClass({
//   onFormSubmit(e){
//     e.preventDefault()
//
//     let updates = {}
//     let name = this.refs.name.value
//     let message = this.refs.message.value
//     if(name.length > 0){
//       this.refs.name.value = '';
//       updates.name = name
//     //  this.props.onNewName(name)  //props sur le componenet en bas.
//     }
//     if (message.length > 0){
//       this.refs.message.value = '';
//         updates.message = message
//       //this.props.onNewMessage(message)  //props sur le componenet en bas.
//     }
//     this.props.onNewData(updates)
//   },
//    render() {
//      return  (
//       <div>
//         <form  onSubmit={this.onFormSubmit}>
//           <div>
//             <input type="text" ref="name" placeholder="nom..." />
//           </div>
//           <div>
//             <textarea type="text" ref="message"  placeholder="votre message..."/>
//           </div>
//           <br />
//           <div>
//             <button className="btn btn-danger">Lancer</button>
//           </div>
//         </form>
//       </div>
//      )
//     }
// })
//
//
// const Greeter = React.createClass({
// getInitialState(){
//    return {     ///ca ici est this.state
//      name: 'a vous',
//      message: 'Ceci est le message par defaut'
//    }
// },
// componentDidMount(){  ///est
//   let node =  findDOMNode(this);  ///retourne tout le div.
//   let form = node.children[1]; //scan le node et trouve a l index 1 la form.
//   TweenMax.from(form,2,{
//     opacity: 0,  x:  1200,  scale: 3.5,
//     ease: Power4.easeInOut
//   })
// },
// handleNewData(updates){ ///va recevoir le nom the form component
//   // this.setState({//   name: name // })
//   this.setState(updates) ///on peut passer l objet directement
// },
//  render() {
//     return (
//     <div>
//       <GreeterMessage name={this.state.name} message={this.state.message}/>
//       <GreeterForm onNewData={this.handleNewData} />  {/* devient la props a utiliser dans la form*/}
//     </div>
//     )
//   }
// });
//
//
// render (
//  <Greeter />,
//    document.getElementById('MainInterface')
// )
//
// //=================================================================================================================================
//
//









//
// //=================================================================================================================================
//
// //VIDEO 14-15 Nested Component  part1-2
//
// const GreeterMessage = React.createClass({
//    render() {
//   let name = this.props.name
//   let message = this.props.message +' '+ name;
//      return  (
//       <div>
//         <h1>Bonjour {name} !</h1>
//         <p>{message} !!</p>
//       </div>
//      )
//     }
// })
//
//
// const GreeterForm = React.createClass({
//   onFormSubmit(e){
//     e.preventDefault()
//     let name = this.refs.name.value
//     if(name.length > 0){
//       this.refs.name.value = '';
//       this.props.onNewName(name)  //props sur le componenet en bas.
//     }
//   },
//    render() {
//      return  (
//       <div>
//         <form  onSubmit={this.onFormSubmit}>
//           <input type="text" ref="name"  />
//           <button className="btn btn-danger">Lancer</button>
//         </form>
//       </div>
//      )
//     }
// })
//
//
// const Greeter = React.createClass({
//   getDefaultProps(){
//     return {
//       message: 'Ceci est le message par defaut'
//     }
//   },
// getInitialState(){
//    return {     ///ca ici est this.state
//      name: 'a vous'
//    }
// },
// componentDidMount(){  ///est
//   let node = ReactDOM.findDOMNode(this);  ///retourne tout le div.
//   let form = node.children[1]; //scan le node et trouve a l index 1 la form.
//   TweenMax.from(form,2,{
//     opacity: 0,
//     x:  1200,
//     scale: 3.5,
//     color: 'redrgb(46, 80, 145)',  //fonctionne pas.
//     ease: Power4.easeInOut
//   })
// },
// handleNewName(name){ ///va recevoir le nom the form component
//   this.setState({
//     name: name
//   })
// },
//  render() {
//   //let name = this.state.name //si on veut pas entrer en bas tout l affaire {this.state.name}
//   //let message = this.props.message  //si on veut pas entrer en bas tout l affaire {this.props.message}
//     return (
//     <div>
//       <GreeterMessage name={this.state.name} message={this.props.message}/>
//       <GreeterForm onNewName={this.handleNewName}/>  {/* devient la props a utiliser dans la form*/}
//     </div>
//     )
//   }
// });
//
//
// render (
//  <Greeter />,
//    document.getElementById('MainInterface')
// )
//
// //=================================================================================================================================
//








//
// //=================================================================================================================================
//
// //VIDEO 13 Component STATE, le state est l objet qui produit un refresh  ET GSAP,
//
// const Greeter = React.createClass({
//   getDefaultProps(){
//     return {
//       nom : 'Benoit',
//       force: 10,
//       testmap: ['array', 'magique', 'merveilleuse'] //
//     }
//   },
// getInitialState(){
//    return {     ///ca ici est this.state
//      name: ''
//    }
// },
// componentDidMount(){  ///est
//   //  console.log(this.props.last) /// lafrance
//   let node = ReactDOM.findDOMNode(this);  ///retourne tout le div.
//   let form = node.children[1]; //scan le node et trouve a l index 1 la form.
//   TweenMax.from(form,3,{
//     opacity: 0,
//     x:  200,
//     color: 'redrgb(46, 80, 145)',  //fonctionne pas.
//     ease: Power4.easeInOut
//   })
// },
// handleSubmit(e){
//  e.preventDefault()
//  let n  = this.refs.name  //shortcut
//  let tempData = n.value //le ref permet d aller le chercher comme une className en css.
//  if(typeof tempData === 'string' && tempData.length > 0){       //voir si pas vide et string.
//    this.setState({
//      name: tempData
//    })
//  }
//   n.value = ''  //reset du field
// },
//  render() {
//      let p = this.props ///creer un shortcut.
//      let last = this.props.last  ///variable doit etre apres le render.
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom}</h1>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref="name"  /*onChange={this.handleSubmit}*/ />
//         <button className="btn btn-danger">Lancer</button>
//       </form>
//       <h1>Merci {this.state.name}</h1>
//     </div>
//     )
//   }
// });
// //variable
// const testeur = "botanique"  //mettre a l exterieur de la class fonctionne aussi.
// const trois = 350
//
//
// render (
//  <Greeter nom='Benoit' last="Lafrance" force={11} fleur={testeur} /*testmap={['un','autre']}*//>,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )
//
// //=================================================================================================================================


//
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number,i) =>
//   <li key={i}>{number * 2}</li>
// );
//
// function App() {
//   return (
//     <ul>
//       <Welcome name="Sara" force={11}/>  {/* en javascript ca ressemblerait a welcome(sarah,11) */}
//       <Welcome name="Cahal" force={11}/>
//       <Welcome name="Edite" force={11}/>
//       {listItems}
//     </ul>
//   );
// }
//
// function Welcome(props) {  //on passe name en props
//   return (
//       <li>Hello, {props.name} {props.force} </li>
//   )
// }
// function Test(){
//  return (
//  <div>
//    <Welcome force={1500}  />
//    {listItems}
//  </div>
//   )
// }
//
// render(
//   <div>
//     <App />
//     <Test />
//   </div>
//   ,
//   document.getElementById('app')
// );


//
// //=================================================================================================================================
//
// //VIDEO 13 Component STATE, le state est l objet qui produit un refresh,
//
// const Greeter = React.createClass({
// getInitialState(){
//    return {     ///ca ici est this.state
//      name: ''
//    }
// },
// getDefaultProps(){
//   return {
//     nom : 'Benoit',
//     force: 10,
//     testmap: ['array', 'magique', 'merveilleuse'] //
//   }
// },
//  componentDidMount(){  ///est
// //  console.log(this.props.trois) ///marche pas
//     console.log(this.props.last) /// lafrance
// },
// handleSubmit(e){
//  e.preventDefault()
//  let tempData = this.refs.name.value //le ref permet d aller le chercher comme une className.
//  console.log(tempData)
//  if(tempData){   ///si pas vide.
//    this.setState({
//      name: tempData
//    })
//  }
//  this.refs.name.value = ''  //reset du field
// },
//   render() {
//      let last = this.props.last  ///variable doit etre apres le render.
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom} {this.props.force}   </h1>
//       <h4>{this.props.nom} {last} {trois}</h4>
//       <p>{this.props.fleur}</p>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref="name"  /*onChange={this.handleSubmit}*/ />
//         <button className="btn btn-danger" >Lancer</button>
//       </form>
//       <h1>Merci {this.state.name}</h1>
//     </div>
//     )
//   }
// });
//
// //variable
// const testeur = "botanique"  //mettre a l exterieur de la class fonctionne aussi.
// const trois = 3
//
// render (
//  <Greeter nom='Benoit' last="Lafrance" force={11} fleur={testeur} /*testmap={['un','autre']}*//>,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )
//
// //=================================================================================================================================
//








//
// //=================================================================================================================================
//
// //VIDEO 12 REFS On submit de FORM, ref qui permet de donner acces a un element, pour ici sortir la valeur
//
// const Greeter = React.createClass({
// getDefaultProps(){
//   return {
//     nom : 'Benoit',
//     force: 10,
//     testmap: ['array', 'magique', 'merveilleuse'] //
//   }
// },
//  componentDidMount(){  ///est
// //  console.log(this.props.trois) ///marche pas
//     console.log(this.props.last) /// lafrance
// },
// handleSubmit(e){
//  e.preventDefault()
//  let tempData = this.refs.name.value //le ref permet d aller le chercher.
//  console.log(tempData)
// },
//   render() {
//      let last = this.props.last  ///variable doit etre apres le render.
//
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom} {this.props.force}   </h1>
//       <h4>{this.props.nom} {last} {trois}</h4>
//       <p>{this.props.fleur}</p>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref="name"   />
//         <button className="btn btn-danger" >Lancer</button>
//       </form>
//     </div>
//     )
//   }
// });
//
//
// const testeur = "botanique"  //mettre a l exterieur de la class fonctionne aussi.
//  let trois = 3
// render (
//  <Greeter nom='Benoit' last="Lafrance" force={11} fleur={testeur} /*testmap={['un','autre']}*//>,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )
//
//
//
// //=================================================================================================================================
//



// //=================================================================================================================================
//
// //VIDEO 11 suite LES PROPS. ET GETDEFAULTPROPS et map
//
// const Greeter = React.createClass({
// getDefaultProps(){
//   return {
//     nom : 'Benoit',
//     force: 10,
//     testmap: ['array', 'magique', 'merveilleuse'] //
//   }
// },
//  componentDidMount(){  ///est
// //  console.log(this.props.trois) ///marche pas
//     console.log(this.props.last) /// lafrance
// },
//   render() {
//     ///lui suggere de faire une variable avec nos props et les pointer vers this. props. valeur et dans le jsx utiliser que le nom de variable, ca fait du sens...comme last ici
//      let last = this.props.last  ///variable doit etre apres le render.
//     let trois = 3 ///peut aussi faire ca.
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom} {this.props.force} </h1>
//       <h4>{this.props.nom} {last} {trois}</h4>
//       <p>{this.props.fleur}</p>
//
//       {/* faire un map avec l'array */}
//       {
//         this.props.testmap.map((tt,i) => {
//           return (
//             <h2 key={i}>{tt} a l'index {i}</h2>
//           )
//         })
//       }
//
//     </div>
//     )
//   }
// });
//
//
// const testeur = "botanique"  //mettre a l exterieur de la class fonctionne aussi.
//
// render (
//  <Greeter nom='Benoit' last="Lafrance" force={11} fleur={testeur} /*testmap={['un','autre']}*//>,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )
//
//
//
// //=================================================================================================================================
//





//=================================================================================================================================

//VIDEO 11 LES PROPS. ET GETDEFAULTPROPS

// const Greeter = React.createClass({
// getDefaultProps(){
//   return {
//     nom : 'Benoit',
//     force: 10
//   }
// },
//  componentDidMount(){  ///est
// //  console.log(this.props.trois) ///marche pas
//     console.log(this.props.last) /// lafrance
// },
//   render() {
//      let last = this.props.last  ///variable doit etre apres le render.
//     let trois = 3 ///peut aussi faire ca.
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom} {this.props.force} </h1>
//       <h4>{this.props.nom} {last} {trois}</h4>
//
//     </div>
//     )
//   }
// });
//
//
//
//
// render (
//  <Greeter nom='Benoit' last="Lafrance" force={11} />,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )
//


//=================================================================================================================================












//=================================================================================================================================

// //video 9 le jsx
// const Greeter = React.createClass({
//
//   render() {
//     return (
//     <div>
//       <h1>Bonjour, {this.props.nom} </h1>
//       <h4>{this.props.nom}</h4>
//
//     </div>
//     )
//   }
// });
//
// render (
//  <Greeter nom='Benoit' />,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('MainInterface')
// )

//=================================================================================================================================



//=================================================================================================================================

// ///plus basic  video 7
//
// render (
//   <h1>Text magique </h1>,
//    document.getElementById('MainInterface')
// )
//=================================================================================================================================







//=================================================================================================================================
// render (
//  <MainInterface />,   ///props vont sur l element de render !!!  number fonctione entre {}
//    document.getElementById('app')
// )
//=================================================================================================================================
