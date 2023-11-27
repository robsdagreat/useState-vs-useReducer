import {State, Reducer} from './StatenReducer.jsx'
import Effect from './UseEffect.jsx'
import Reference from './UseReference.jsx'
import "./App.css";

function App() {
 return(
    <>

    <div>
    <span>How to use useState</span> 
    <State/>
    </div>

    <div>
    <span>How to sue useReducer</span>
    <Reducer/>
    </div>
    
    <div>
      <span>How to sue useEffect</span>
      <Effect/>
    </div>

    <div>
      <span>How to sue useRef</span>
      <Reference/>
    </div>
    
    </>
  );
}

export default App;
