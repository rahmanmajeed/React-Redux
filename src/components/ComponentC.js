import { useContext } from "react"
import {CounterContext} from '../App'
export default function ComponentC(){
     const countConsumer = useContext(CounterContext)

     return(
          <div>
               <h3>Component C &#8673;</h3>
               <button type="button" onClick={() => countConsumer.countDispatch('increment')}>Increment</button>&nbsp;&nbsp;&nbsp;
               <button type="button" onClick={() => countConsumer.countDispatch('decrement')}>Decrement</button>
          </div>
     )
}