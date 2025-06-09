import React from "react";

function CounterTest () {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter-test">
      <h1>Counter Test</h1>
      <p data-testid="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterTest;