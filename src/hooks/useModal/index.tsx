import * as React from 'react'
import useToggle from './../useToggle'
import './index.less'

export type tToggle = (nextValue?: any) => void
export type Element = ((toggle?: tToggle) => React.ReactElement<any>) | React.ReactElement<any>;


const prefixCls = 'use-modal';

const useModal = (element: Element, initBool: boolean = false): [React.ReactElement<any> | null, boolean, tToggle] => {
  const [visible, toggle] = useToggle(initBool);
  let el = null;
  if (typeof element === 'function') {
    element = element(toggle);
  }
  element = React.cloneElement(element, {
    className: element.props.className + ` ${prefixCls}-content`,
  })
  if (visible) {
    el = (
      <div className={prefixCls}>
        <div onClick={toggle} className={`${prefixCls}-mask`} />
        {element}
      </div>
    )
  }
  
  return [el, visible, toggle]
}

export default useModal;