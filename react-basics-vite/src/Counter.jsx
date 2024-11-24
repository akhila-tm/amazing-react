import { useState } from 'react';
import './counter.css'
    function Counter(){
        let [countValue,setCountValue] = useState(3)
        const addValue = () => {
            if (countValue < 20) {
                setCountValue(countValue + 1);
            }
        };
    
        const removeValue = () => {
            if (countValue > 0) {
                setCountValue(countValue - 1);
            }
        };
        return(
            <div className='counter'>
                <h1>Counter Value : {countValue} </h1>
                <button onClick={addValue}>+</button>
                <button onClick={removeValue}>-</button>
            </div>
        )

    }
export default Counter