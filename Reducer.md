# useReducer is use to manage the state.

## useState() hook create based on useReducer() hook.


# When which is one use will be wise between useState and useReduce.
--------------------------------------------+----------------------------------------
| useState                                  +          useReduce                    |
--------------------------------------------+----------------------------------------
| 1. if state-change number is minimal(2,3) + 1. if state-change number is maximum  |
| useState                                  +    or uncountable.                    |
|-------------------------------------------+---------------------------------------|
| 2. if state change is relative don't use  + 2. use useReduce in this-case.        |
|   useState                                +                                       |
|-------------------------------------------+---------------------------------------|
| 3. if state data-type primitive use       + 3. if state data-type Object,Array use|
|    useState                               +    useReduce.                         |
|-----------------------------------------------------------------------------------|

# Traditional Reducer function and useReducer comparison.

--------------------------------------------+----------------------------------------
| Traditional Reduce                        +     useReducer                        ||                                           +                                       |
--------------------------------------------+----------------------------------------
| 1. array.reduce(reducer,initialValue)     + 1. useReducer(reducer, initialState)  |
|                                           +                                       |
|-------------------------------------------+---------------------------------------|
| 2. singleReturnValue= reducer(accumulator,+ 2. newState = reducer(currentState,   |
|  itemValue)                               +    Action)                            |
|-------------------------------------------+---------------------------------------|
