import { useState } from "react";

export const StateExample = () => { 
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev + 1);
    }
    
    return( <div>
        <p> Count: {count} </p>
        <button onClick={increaseCount}>Increment</button>
    </div>
    );
}