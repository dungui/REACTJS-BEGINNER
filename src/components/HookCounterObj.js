import { useState } from "react";

function HookCounterObj(){

    const [name, setName] = useState({firstname: '', lastname: ''});

    return(
    <div>

        <br/>
        <form>

        <input 
        type="text" 
        value={name.firstname} 
        onChange={(e)=>setName({...name,firstname : e.target.value})}/>

        <input 
        type="text" 
        value={name.lastname} 
        onChange={(e) => setName({...name,lastname: e.target.value})}/>


        
        </form>


        <h3>{name.firstname}  {name.lastname}</h3>
    </div>
    )
}

export default HookCounterObj;