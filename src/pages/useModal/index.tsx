import * as React from 'react'
import { useModal } from '../../hooks'
import './index.less'

export default () => {
  const HelloWorld = (toggle?: (nextValue?: any) => void) => (
    <div className="alert-modal">
      hello world.
      <button onClick={toggle}>X</button>
    </div>
  )
  const [alertModal, visible, toggle] = useModal(HelloWorld)

  return (
    <div>
      <button onClick={toggle}>toggle</button>
      <button onClick={() => toggle(true)}>showModal</button>
      <button onClick={() => toggle(false)}>hideModal</button>
      <div>visible: {visible ? 'true' : 'false'}</div>
      {alertModal}
    </div>
  )
}