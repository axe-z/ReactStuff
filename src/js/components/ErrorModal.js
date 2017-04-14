import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


class ErrorModal extends React.Component {
  constructor (props){
   super(props)
  }

  componentDidMount(){  ///est au moment de montrer
  let modal = $('#error-modal')
  let node =  findDOMNode(this);  ///retourne tout le div.
  TweenMax.from(modal, 1 , {
    x: 20,
    scale:1.9,
    opacity: 0,
    ease: Power4.easeInOut
  })
  }
  render() {
    let {titre, message} = this.props
    return (
      <div id="error-modal">
        <h4>{this.props.titre}</h4>
        <p>{this.props.message}</p>

      </div>
    );
  }
}

ErrorModal.defaultProps = {
  titre: 'Erreur',
  message: 'ville non trouvee, reessayer svp'
}

// ErrorModal.propTypes = {
//   titre: React.PropTypes.string,
//   message: React.PropTypes.boolean.isRequired
// }

export default ErrorModal
