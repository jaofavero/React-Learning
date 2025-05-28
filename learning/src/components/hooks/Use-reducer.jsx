import { useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error(`Ação desconhecida: ${action.type}`);
    };
};

export const ReducerExample = () => {
    const [state, dispatch] = useReducer (reducer, {count: 0});
    return (
        <div className="reducer-example">
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "increment"})}> + </button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <p><button onClick={() => dispatch({type: "unknown"})}>Error</button></p>
        </div>
    );
}