import React, { useContext } from "react";
import counterContext from "../../store/store";
import classes from "./Counter1.module.css";

function Counter1() {
  const countCtx = useContext(counterContext);

  return (
    <div className={classes.container}>
      <h3>Clicks: {countCtx.countState.counter1}</h3>

      <div className={classes.btn}>
        <button onClick={() => countCtx.countDispatch("incrementCounter1")}>
          Increment 1st Counter
        </button>
        <button onClick={() => countCtx.countDispatch("resetCounter1")}>
          Reset 1st Counter
        </button>
      </div>
    </div>
  );
}

export default Counter1;
