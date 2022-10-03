import React from "react";
import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);
  //UseEffect
  useEffect(() => {
    document.title = "You Clicked Count Button ${count}";
  });
  return (
    <div>
      <p>You clicked the count button {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click To Count
      </button>
    </div>
  );
}
export default Count;
