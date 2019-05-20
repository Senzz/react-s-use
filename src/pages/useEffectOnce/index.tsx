import * as React from 'react'
import { useEffectOnce } from '../../hooks'

export default () => {
  useEffectOnce(() => {
    console.log('didmount')

    return () => {
      console.log('unmount')
    }
  });

  return null;
}