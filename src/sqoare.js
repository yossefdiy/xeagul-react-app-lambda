import React from 'react';
import './App.css'



function Square(props){
    return(
      <div>
        <button className="btn btn-secondary "onClick={()=> props.onClick()}>{props.value}</button>
      </div>
    )
  }
    export default Square
  