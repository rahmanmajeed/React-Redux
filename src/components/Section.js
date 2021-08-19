import { useDispatch, useSelector } from "react-redux"
import {increment} from '../redux/actions/index'
export default function Section(){
     const counter = useSelector((store)=> store.CounterReducer)
     const dispatch = useDispatch();
     return(
          <div>
               <h3>Counter: {counter}</h3>
               <button onClick={() => dispatch(increment())}>+</button>
          </div>
     )
}