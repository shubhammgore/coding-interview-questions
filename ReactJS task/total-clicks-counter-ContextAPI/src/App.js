import { useContext } from "react";

import counterContext from "./store/store";
import Counter1 from "./components/Counter1/Counter1";
import Counter2 from "./components/Counter2/Counter2";

import "./App.css";

export default function App() {
  const countCtx = useContext(counterContext);

  return (
    <div className="container">
      <div className="globalCounter">
        <h3>Total Clicks: {countCtx.countState.counter}</h3>
      </div>
      <div className="counters">
        <Counter1 />
        <Counter2 />
      </div>
      <div className="resetGlobalCounter">
        <button
          className="btn"
          onClick={(e) => countCtx.countDispatch("reset")}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}
