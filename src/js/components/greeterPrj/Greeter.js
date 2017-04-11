import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import GreeterForm from './GreeterForm'
import GreeterMessage from './GreeterMessage'

const Greeter = React.createClass({
getInitialState(){
   return {     ///ca ici est this.state
     name: 'a vous',
     message: 'Ceci est le message par defaut'
   }
},
componentDidMount(){  ///est
  let node =  findDOMNode(this);  ///retourne tout le div.
  let form = node.children[1]; //scan le node et trouve a l index 1 la form.
  TweenMax.from(form,2,{
    opacity: 0,  x:  1200,  scale: 3.5,
    ease: Power4.easeInOut
  })
},
handleNewData(updates){ ///va recevoir le nom the form component
  this.setState(updates) ///on peut passer l objet directement
},
 render() {
    return (
    <div>
      <GreeterMessage name={this.state.name} message={this.state.message}/>
      <GreeterForm onNewData={this.handleNewData} />  {/* devient la props a utiliser dans la form*/}
    </div>
    )
  }
});

export default Greeter
