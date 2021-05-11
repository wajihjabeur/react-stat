import './App.css';
import { Component } from 'react';
import image1 from "./Untitled.png"

class App extends Component{


// var person={
//   fullName:"Fatma",
//   bio:"Student",
//   picture:{image1},
//   profession:"hiiii"

// }
state={isVisible:false}
person=[
  'Wajih',
  '25 yo',
  'Engineer',

]
showV=()=>{
  this.setState({
    isVisible:!this.state.isVisible
  })
}

render(){
  return (
    <div>
    <button onClick={this.showV}>Show info</button>

{this.state.isVisible ? (
<h1>
    {this.person.map((p,i)=>(
      <h1 key={i}>{p}</h1>

    )
    )
    } <img src={image1} alt=''/>
    </h1>
    ) 
    :(<h4>show info</h4>)}




    </div>)

 

}
}
setInterval(() => {
  console.log('Interval triggered');
}, 1000);



export default App;