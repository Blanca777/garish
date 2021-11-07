import React from 'react'
import classNames from 'classnames'
import css from './index.module.scss'

const CCItem: React.FC = ({children}) => {
  return <div className={classNames(css.box, css.active)}>cc-{children}</div>
}

export default CCItem
