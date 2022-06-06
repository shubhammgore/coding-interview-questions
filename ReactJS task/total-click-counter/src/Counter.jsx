import React, { useEffect, useState } from "react";
import "./styles.css";

const Counter = ({ onUpdate, initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (initialCount) {
      setCount(0);
    }
  }, [initialCount]);

  const incCount = () => {
    let newCount = count + 1;
    setCount(newCount);
    onUpdate();
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={"counter_root"}>
      <div>{`Clicks ${count}`}</div>
      <div className={"margin-10"}>
        <button onClick={incCount}>{"Increment"}</button>
      </div>
      <div className={"margin-10"}>
        <button onClick={reset}>{"Reset"}</button>
      </div>
    </div>
  );
};
export default Counter;
