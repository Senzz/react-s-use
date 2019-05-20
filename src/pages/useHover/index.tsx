import * as React from 'react'
import { useHover } from '../../hooks'

export default () => {
  const HoverButton = () => (
    <button>HoverButton</button>
  )

  const [HoverButtonELe, isHover] = useHover(HoverButton);

  return (
    <div>
      <div>isHover: {isHover ? 'ON' : 'OFF'}</div>
      {HoverButtonELe}
    </div>
  )
}