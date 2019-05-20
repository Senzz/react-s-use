import * as React from "react";
import { useToggle } from '../../hooks';

export default () => {
  const [isShowInfo, toggleShowInfo] = useToggle(false);

  const showInfo = () => toggleShowInfo(true);
  const hideInfo = () => toggleShowInfo(false);

  return (
    <div>
      {
        isShowInfo && (
          <div>
            <p>name: Senzz</p>
            <p>other information...</p>
          </div>
        )
      }
      
      <div>
        <button onClick={toggleShowInfo}>toggleShowInfo</button>
        <button onClick={showInfo}>showInfo</button>
        <button onClick={hideInfo}>hideInfo</button>
      </div>
    </div>
  )
}