import * as React from 'react'
import { useFetch } from '../../hooks';


export default () => {
  const {res, err, loading, fetch} = useFetch({
    url: 'https://api.github.com/'
  });
  console.log(res)
  if (loading) {
    return <div>loading...</div>
  }
  if (err) {
    return <div>error: {err.toString()}</div>
  }
  return (
    <div>
      <div>res: </div>
      <div>{JSON.stringify(res)}</div>
      <button onClick={fetch}>update</button>
      <button onClick={() => fetch({ url: 'https://api.github.com/2' })}>get 2</button>
    </div>
  )
}