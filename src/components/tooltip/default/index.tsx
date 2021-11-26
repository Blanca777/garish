import React, {useContext, useState} from 'react'
import {tooltipContextInterface} from '../interface'
import css from './index.module.scss'
import {TooltipContext} from '../index'

const Default: React.FC = ({children}) => {
  const {color, placeClassName} = useContext(TooltipContext) as tooltipContextInterface
  const [triangleStyle] = useState(() => {
    let initTriangleStyle = {}
    switch (placeClassName) {
      case 'bottom':
        initTriangleStyle = {
          borderBottom: `10px solid ${color}`,
        }
        break
      default:
        initTriangleStyle = {
          borderTop: `10px solid ${color}`,
        }
    }
    return initTriangleStyle
  })
  return (
    <div style={{backgroundColor: color}} className={css.container}>
      <div style={triangleStyle} className={css[placeClassName as string]}></div>
      {children}
    </div>
  )
}
export default Default
