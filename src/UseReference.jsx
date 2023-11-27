import { useRef } from "react"

const Reference= ()=>{
    const inputRef= useRef(null); 
    const hook= ()=>{
        inputRef.current.value="";
    }

    return(
        <>
        <h1>Robs</h1>
        <input placeholder="Ex..." type="text" ref={inputRef}/>
        <button
         onClick={hook}
        >
            Change Name
        </button>
        </>
    )
}

export default Reference