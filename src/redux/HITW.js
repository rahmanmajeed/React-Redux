
import {createStore} from 'redux';

//actions

const increment = () => {
     return {
          type:'INCREMENT'
     }
}

const decrement = () => {
     return {
          type:'DECREMENT'
     }
}

//reducer

const counter = (state=0, action) =>{
     switch(action.type) {
          case 'INCREMENT':
               return state + 1;
          case 'DECREMENT':
               return state - 1;
          default:
               return state;
     }
}

//store

let store = createStore(counter)

//dispatch

store.dispatch(increment())
store.dispatch(decrement())


//display in console
store.subscribe(()=> console.log(store.getState()));

function myStore() {
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
     return 'Hello'
}

export default myStore;