import * as React from "react"
import './index.less'
import { routesConfig } from '../../Routes'
import { Link } from 'react-router-dom'
import useTitle from './../../hooks/useTitle'

export default () => {
  useTitle('home');
  return (
    <div className='home'>
      {
        routesConfig.map(({ name, path }) => (
          <div 
            key={path} 
            className='home-page-name'
          >
            <Link to={path}>{name}</Link>
          </div>
        ))
      }
    </div>
  )
};
