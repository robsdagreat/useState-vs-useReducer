import { useState, useReducer } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { increment: state.increment + 1, showText: state.showText };

      case "toggleShowText":
        return { increment: state.increment, showText: !state.showText };
      default:
        return state;  
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    increment: 0,
    showText: true,
  });

  return (
    <>
      {/* first alternative using useState */}

      <div>
        <h1>{count}</h1>

        <button
          onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
          }}
        >
          Click Here
        </button>
        {showText && <p>This is the text</p>}
      </div>

      <div>
        <h1>{state.increment}</h1>
        <button
         onClick={()=>{
          dispatch({type: "Increment"});
          dispatch({type: "toggleShowText"})
         }}
        >
          Click Here
        </button>
        {state.showText && <p>This another Text</p>}
      </div>
    </>
  );
}

export default App;
