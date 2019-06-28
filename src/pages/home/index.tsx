import * as React from "react"
import './index.less'
import { routesConfig } from '../../Routes'
import { Link } from 'react-router-dom'
import useTitle from './../../hooks/useTitle'
import Decimal from 'decimal.js'
export default () => {
  useTitle('home');
  const sum = new Decimal(0.57 * 100).toNumber();
  return (
    <div className='home'>
      <p>sum：{sum}</p>
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
