import { useState, useCallback } from 'react'
import useEffectOnce from './useEffectOnce';

type TFetchParams = {
  url: string,
  method?: string,
  body?: any,
  [otherName: string]: any
}
type TReturnArr = {
  res: any, 
  err: TypeError | null, 
  loading: boolean, 
  setRes: React.Dispatch<React.SetStateAction<null>>,
  setErr: React.Dispatch<React.SetStateAction<null>>,
  fetch: (f: any) => void
}

const useFetch = (fetchParams: TFetchParams = { url: '', method: 'GET' }): TReturnArr => {
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const fetch = useCallback(
    (fetchParams_: any = fetchParams) => {
      setRes(null);
      setErr(null);
      setLoading(true);

      window.fetch(fetchParams_.url, {
        ...fetchParams_
      })
        .then(res => res.json())
        .then(setRes)
        .catch(setErr)
        .then(() => setLoading(false))
    },
    [fetchParams]
  )

  useEffectOnce(() => fetch(fetchParams))

  return {
    res, err, loading, setRes, setErr, fetch
  };
}

export default useFetch
