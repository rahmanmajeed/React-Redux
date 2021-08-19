import * as AT from './action-types';


export function addTodo(){
     return{
          type: AT.ADD_TODO
     }
}

export function completeTodo(){
     return{
          type: AT.COMPLETE_TODO
     }
}