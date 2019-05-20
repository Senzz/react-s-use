
import * as React from "react";
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>Click me</button>
    </div>
  );
};
