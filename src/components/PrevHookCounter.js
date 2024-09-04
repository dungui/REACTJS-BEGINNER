import { useState } from "react";

function PrevCountHook(){
    const intialCount = 0;
    const [num, setNum] = useState(intialCount);

    function Increamentby5(){
            for(let i=0; i < 5; i++){
                setNum(prevNum => prevNum + 1);
            }
        
    }
    return(
        <div>
            Count {num}

            {/* initial value of the count variable */}
            <button onClick={() => setNum(intialCount)}>reSet</button>
            <button onClick={() => setNum(num + 1)}>increment</button>
            <button onClick={() => setNum(num - 1)}>decrement</button>
            <button onClick={Increamentby5}>increase by 4</button>
        </div>
    )
}

export default PrevCountHook;