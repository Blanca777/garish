import React from 'react'
// import classNames from 'classnames'
import css from './index.module.scss'

const FlowLine: React.FC = ({children}) => {
  return (
    <div className={css.box}>
      <span>{children}</span>
    </div>
  )
}

export default FlowLine
