import { createContext, useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA'
import ComplexCounter from './components/ComplexCounter';

//createContext

export const CounterContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
      switch (action) {
           case 'increment':
                return state + 1;           
           case 'decrement':
                return state - 1;
      
           default:
               return state;            
          }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
 
   return (
    <div className="App">
      <h1>{count}</h1>
      <CounterContext.Provider value={{countDispatch:dispatch}}>
          <ComponentA/>
      </CounterContext.Provider>
       <br/><br/>
       <ComplexCounter/>      
    </div>
  );
}

export default App;
