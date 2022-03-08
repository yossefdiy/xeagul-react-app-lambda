import React,{useState} from 'react';
import './App.css';
import Square from './sqoare';


  

function App(){
 
const [squar, setSquar ] =useState(Array(36 ).fill(null))
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
      [0,1,2,3,4,5],
      [6,7,8,9,10,11],
      [12,13,14,15,16,17],
      [18,19,20,21,22,23],
      [24,25,26,27,28,29],
      [30,31,32,33,34,35],
      [0,6,12,18,24,30],
      [1,7,13,19,25,31],
      [2,8,14,20,26,32],
      [3,9,15,21,27,33],
      [4,10,16,22,28,34],
      [5,11,17,23,29,35],
      [0,7,14,21,28,35],
      [5,10,15,20,25,30]  
    ]; 
    for(let i=0;i< list.length;i++){
      const [a,b,c,d,e,f]=list[i];
      if (squares[a]&& squares[a]===squares[b]&&squares[b]===squares[c]&&squares[c]===squares[d]&&squares[d]===squares[e]&&squares[e]===squares[f]){
        return squares[a];
    }
    }
    return null
  }
  return(
       
      <div className='app'>
        <h1>************TIC TAC TOE*********</h1>
        <div className='grid'>
        <div className='bt'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
  
        </div>
       <div className='bt'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}

   
   </div>
  
  
   

       <div className='bt'>
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
   
   
    </div>
    <div className='bt'>
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
  
        </div>
       <div className='bt'>
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
        {renderSquare(28)}
        {renderSquare(29)}

   
   </div>
  
  
   

       <div className='bt'>
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
        {renderSquare(35)}
   
   
    </div>
    </div>
 
  {status}
     
  </div>
  )
}

 

export default App