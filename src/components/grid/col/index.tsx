import React from 'react'
import {ColProps} from './interface'
import css from './index.module.scss'

const Row: React.FC<ColProps> = ({children}) => {
  return <div className={css.col}>{children}</div>
}

export default Row

Row.defaultProps = {
  garish: 'default',
  span: 24,
}
