import CounterReducer from './counter_reducer';
import LoggedReducer from './logged_reducer';
import TodoReducer from './todo_reducer';
import {combineReducers} from 'redux';

const RootReducers = combineReducers({
     CounterReducer,
     LoggedReducer, 
     TodoReducer
});

export default RootReducers;