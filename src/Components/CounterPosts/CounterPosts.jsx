import { useState } from 'react'
import './CounterPosts.css'


function CounterPosts(){
    const [counter, setCounter]=useState(0);

    function Increment(){
        setCounter(counter+1);
    }

    function Decrement(){
         if (counter >0){
            setCounter(counter-1);
         }
          
        
        
    }
        
 
    return(
<div className="Rates">
<button className="plus" onClick={Increment}>+</button>
<label className="numrates">{counter}</label>
<button className="Minus" onClick={Decrement}>-</button>

    
</div>
    )
}

export default CounterPosts