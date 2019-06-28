
import * as React from "react";
import { useState } from 'react';
import Decimal from 'decimal.js'

export default () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>Click me</button>
      <p>{new Decimal(0.57 * 100).toNumber()}</p>
    </div>
  );
};
