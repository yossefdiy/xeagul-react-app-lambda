import React,{useState} from 'react';
import "./App.css" ;




 function App() {
   const [click1,setClick1]= useState(' ')
   const Habdelclick1=()=>{
     if (click1)
     setClick1('x')
  
   }
   const [click2,setClick2]= useState(' ')
   const Habdelclick2=()=>{
     if (click2)
     setClick2('x')
  
   }
   const [click3,setClick3]= useState(' ')
   const Habdelclick3=()=>{
     if (click3)
     setClick3('x')
  
   }
   const [click4,setClick4]= useState(' ')
   const Habdelclick4=()=>{
     if (click4)
     setClick4('x')
  
   }
   const [click5,setClick5]= useState(' ')
   const Habdelclick5=()=>{
     if (click5)
     setClick5('x')
  
   }
   const [click6,setClick6]= useState(' ')
   const Habdelclick6=()=>{
     if (click6)
     setClick6('x')
  
   }
   const [click7,setClick7]= useState(' ')
  
   const Habdelclick7=()=>{
     if (click7)
     setClick7('x')
  
   }
   const [click8,setClick8]= useState(' ')
   const Habdelclick8=()=>{
     if (click8)
     setClick8('x')
  
   }
   const [click9,setClick9]= useState(' ')
   const Habdelclick9=()=>{
     if (click9)
     setClick9('x');
  
   }
 
   
   if( click1 && click2 && click3 === 'x'){
   
    setTimeout(() => {
      alert("you win")
    },1000);
    
    }
 
   

  
  return (
    <div className='App'>
    <h1>TIC TAC TOE</h1>
     
<div className="grid-container">
  <div className="grid-item1"onClick={Habdelclick1} >{click1}</div> 
  <div className="grid-item2"onClick={Habdelclick2} >{click2}</div>
  <div className="grid-item3"onClick={Habdelclick3} >{click3}</div>  
  <div className="grid-item4"onClick={Habdelclick4} >{click4}</div>
  <div className="grid-item5"onClick={Habdelclick5} >{click5}</div>
  <div className="grid-item6"onClick={Habdelclick6} >{click6}</div>  
  <div className="grid-item7"onClick={Habdelclick7} >{click7}</div>
  <div className="grid-item8"onClick={Habdelclick8} >{click8}</div>
  <div className="grid-item9"onClick={Habdelclick9} >{click9}</div>  
  
</div>
</div>
  )
}
export default App
