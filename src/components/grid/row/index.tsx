import React from 'react'
import {RowProps} from './interface'
import css from './index.module.scss'
import classNames from 'classnames'

const Row: React.FC<RowProps> = ({align, className, children}) => {
  const cln = classNames(className, css[align as string], css.contain)
  return <div className={cln}>{children}</div>
}

export default Row

Row.defaultProps = {
  garish: 'default',
  align: 'row',
}
