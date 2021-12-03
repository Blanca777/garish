import React from 'react'
import {ColProps} from './interface'
import css from './index.module.scss'
import classNames from 'classnames'

const Row: React.FC<ColProps> = ({className, span, children}) => {
  const cln = classNames(css[`col-${span}`], className)
  return <div className={cln}>{children}</div>
}

export default Row

Row.defaultProps = {
  garish: 'default',
  span: 24,
}
