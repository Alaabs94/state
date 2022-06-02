import React, { Component } from "react";
import alaa from "./alaa.jpg"


class Profile extends Component{
    constructor(props){
        console.log("constructor()")
        super(props)
        this.state = {
          timer:0,
          intervall:null
        }
      }


componentDidMount() {
    this.setState({intervall:setInterval(()=>{
        this.setState({timer:this.state.timer +1})
    },1000)})
}

componentWillUnmount() {
    clearInterval(this.state.intervall);
  }

  Person ={
    fullName: "ALAA BSAIHIA",
    bio: " ahBasketball lover,video game player, anime slayer hahaha :)",
     imgSrc: alaa,
    profession: "Full Stack JS-Developer",
  }

render() {
return(
    <div>
    <div>
        <h3>
            <span>fullName:</span>{this.Person.fullName} </h3>
    </div>
    <div>
    <h3>
        <span>Bio:</span>{this.Person.bio} </h3>
</div>
<div>
        <h3>
            <span>Profession:</span>{this.Person.profession} </h3>
    </div>
    <div>
        <h3>
            <span>Compteur:</span>{this.state.timer} </h3>
    </div>
    <div>
       <img className="alaa" src={alaa}></img> 
    </div>
    </div>
)
}
}
 export default Profile
