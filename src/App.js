import React from "react";
import "./App.css";
import Profile from "./component/Profile"
class App extends React.Component {
  constructor(props){
    console.log("constructor()")
    super(props)
    this.state = {isVisible:false}

  }


  toggleVisibility = ()=>{
    this.setState ({isVisible: !this.state.isVisible})
  }



  render() {
    return (

            <div>
              <div>
              <button onClick={this.toggleVisibility} > {this.state.isVisible ? "hide" : "show"}</button>
              </div> 

            {this.state.isVisible && <Profile/>}</div>
        )}


}
export default App;
