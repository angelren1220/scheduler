import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace=false) {
    if(replace) {
      history.pop();
    }
    setHistory([...history, newMode]);
    return setMode(newMode);
  }

  function back() {
    // set limit that it will not pass initial mode
    if (history.length > 1) {
      // remove the last mode in history
      history.pop();
    }

    setHistory(history);
    return setMode(history[history.length - 1]);
  }
  
  return { mode, transition, back };

}

