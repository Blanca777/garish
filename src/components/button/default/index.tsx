import React from 'react'
import css from './index.module.scss'

const Default: React.FC = ({children}) => {
  return <div className={css.box}>{children}</div>
}
export default Default
