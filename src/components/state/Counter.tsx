import { useReducer } from "react";

type CounterState={
    count:number
}

type UpdateAction={
    type:'increment' | 'decrement'
    payload:number
}

type ResetAction={
    type:'reset'
}

//This feature is called dicriminated unions and is recommended approach for typing reducer functions
type CounterAction=UpdateAction|ResetAction

const initialState = {count : 0}

function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return { count : state.count + action.payload}
        case 'decrement':
            return { count : state.count - action.payload}
        case 'reset':
            return initialState
        default :
            return state
    }
}

export const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialState) //type inference done by ts
    return (
        <>
            Count:{state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10 })}>Increment by 10</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10 })}>Increment by 10</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}