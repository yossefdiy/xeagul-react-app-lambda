import React,{useState} from 'react';
import './App.css';
import Square from './sqoare';


  

function App(){
 
const [squar, setSquar ] =useState(Array(9 ).fill(null))
const [x,setX]= useState(true)
const winners = Win(squar)
let status;

if (winners){
  status='WINNER  '+ winners
 alert ('you win')
}
else{status='player '+(x ?'X':'O')}

const renderSquare=(i)=>{
  return(
  <Square value={squar[i]}onClick={()=> HandelClick(i)}/>
  )
  
  
  }
  const HandelClick=(i)=>{
    const squares = squar.slice()
    if (squares[i]===(null)){
    squares[i]= x ? 'X' :'O'
    setSquar(squares) 
    setX(!x)
    }else{alert('cant do that')
  }
};
    function Win(squares){
      const list=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]; 
    for(let i=0;i< list.length;i++){
      const [a,b,c]=list[i];
      if (squares[a]&& squares[a]===squares[b]&&squares[b]===squares[c]){
        return squares[a];
    }
    }
    return null
  }
  return(
       
      <div className='app'>
        <h1 className="lead">************TIC TAC TOE*********</h1>
        <div className='grid'>
        <div className='bt'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
   
  
        </div>
       <div className='bt'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
  

   
   </div>
  
  
   

       <div className='bt'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
 
   
   
    </div>
  
   
    
    </div>
 
  {status}
     
  </div>
  )
}

 

export default App
