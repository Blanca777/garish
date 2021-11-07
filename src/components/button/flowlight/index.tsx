import React from 'react'
import css from './index.module.scss'

const FlowLight: React.FC = ({children}) => {
  return (
    <div className={css.flowLight}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  )
}
export default FlowLight
