import { useState, useCallback } from 'react'

export type tToggle = (nextValue?: any) => void

const useToggle = (initialValue: boolean = false): [boolean, tToggle] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = useCallback(
    (nextValue: any) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue as boolean);
      } else {
        setValue(prevVal => !prevVal);
      }
    },
    [setValue]
  )

  return [value, toggle]
}

export default useToggle;
