import * as React from 'react'
import { useState } from 'react'

export type Element = ((isHover: boolean) => React.ReactElement<any>) | React.ReactElement<any>;

const noop = () => null;

const useHover = (ele: Element): [React.ReactElement<any>, boolean] => {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = (originalOnMouseEnter?: any) => (event?: MouseEvent) => {
    (originalOnMouseEnter || noop)(event);
    setHover(true);
  }

  const onMouseLeave = (originalOnMouseLeave?: any) => (event?: MouseEvent) => {
    (originalOnMouseLeave || noop)(event);
    setHover(false);
  }

  if (typeof ele === 'function') {
    ele = ele(isHover);
  }

  const el = React.cloneElement(ele, {
    onMouseEnter: onMouseEnter(ele.props.onMouseEnter),
    onMouseLeave: onMouseLeave(ele.props.onMouseLeave),
  })
  
  return [el, isHover];
}

export default useHover;
