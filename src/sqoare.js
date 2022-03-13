import React from 'react';
import './App.css'
function Square(props){
    return(
      <div>
        <button type="button" class="btn btn-warning "onClick={()=> props.onClick()}>{props.value}</button>
      </div>
    )
  }
    export default Square
  