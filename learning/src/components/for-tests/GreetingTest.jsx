import React from "react";

function GreetingTest({name}) {
  return (
    <div className="greeting-test">
      <h1>Greeting Test</h1>
      <p>Hello, {name || "World"}!</p>
    </div>
  );
}

export default GreetingTest;