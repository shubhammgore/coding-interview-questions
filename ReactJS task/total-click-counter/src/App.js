import "./styles.css";
import Counter from "./Counter";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  const reset = () => {
    setCount(0);
    setInitialCount(initialCount + 1);
  };

  return (
    <div className="App">
      <h4>{"Welcome"}</h4>
      <p>Total Clicks: {count}</p>
      <Counter
        initialCount={initialCount}
        onUpdate={() => {
          setCount(count + 1);
        }}
      />
      <Counter
        initialCount={initialCount}
        onUpdate={() => {
          setCount(count + 1);
        }}
      />
      <div>
        <button onClick={reset}>{"RESET ALL"}</button>
      </div>
    </div>
  );
}
