import { useReducer } from "react"

const initialState = {
     counter: 0,
     counter2: 0,
};


const reducer = (state, action) => {
     console.log('ACTION: ',action);
      switch (action.type) {
           case 'increment':
                return {...state, counter:state.counter + action.value};           
           case 'decrement':
                return {...state, counter: state.counter - action.value};
           case 'increment2':
                return {...state, counter2:state.counter2 + action.value};           
           case 'decrement2':
                return {...state, counter2: state.counter2 - action.value};
           default:
               return state;            
          }
}

export default function ComplexCounter(){
     const [count, dispatch] = useReducer(reducer, initialState);
     return(
          <div>
               <h2>Complex Counter</h2>
               <div><h2> Count - {count.counter}</h2></div><br/>
               <button type="button" onClick={() => dispatch({type:'increment',value:5})}>Increment</button>
               <button type="button" onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>

               <br></br> <br></br>
               <div><h2> Count - {count.counter2}</h2></div><br/>
               <button type="button" onClick={() => dispatch({type:'increment2',value:2})}>Increment-2</button>
               <button type="button" onClick={() => dispatch({type:'decrement2',value:1})}>Decrement-2</button>
          </div>
     )
}