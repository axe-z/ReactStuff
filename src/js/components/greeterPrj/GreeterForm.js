import React from "react";


///video 22 division
 const GreeterForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault()

    let updates = {}
    let name = this.refs.name.value
    let message = this.refs.message.value
    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name
    //  this.props.onNewName(name)  //props sur le componenet en bas.
    }
    if (message.length > 0){
      this.refs.message.value = '';
        updates.message = message
      //this.props.onNewMessage(message)  //props sur le componenet en bas.
    }
    this.props.onNewData(updates)
  },
   render() {
     return  (
      <div>
        <form  onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="nom..." />
          </div>
          <div>
            <textarea type="text" ref="message"  placeholder="votre message..."/>
          </div>
          <br />
          <div>
            <button className="btn btn-danger">Lancer</button>
          </div>
        </form>
      </div>
     )
    }
})

//const doit etre fait apres.
export default GreeterForm
