import React, { useContext } from "react";
import counterContext from "../../store/store";
import classes from "./Counter2.module.css";

function Counter2() {
  const countCtx = useContext(counterContext);

  return (
    <div className={classes.container}>
      <h3>Clicks: {countCtx.countState.counter2}</h3>

      <div className={classes.btn}>
        <button onClick={() => countCtx.countDispatch("incrementCounter2")}>
          Increment 2st Counter
        </button>
        <button onClick={() => countCtx.countDispatch("resetCounter2")}>
          Reset 2st Counter
        </button>
      </div>
    </div>
  );
}

export default Counter2;
