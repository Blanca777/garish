import React, {Suspense, useState} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
import {tooltipProps} from './interface'

export const TooltipContext = React.createContext({})

const Tooltip: React.FC<tooltipProps> = ({
  garish,
  className,
  title,
  placement,
  color,
  trigger,
  children,
  ...handle
}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${garish}`))

  const placeClassName = classNames({
    top: placement === 'top',
    left: placement === 'left',
    right: placement === 'right',
    bottom: placement === 'bottom',
  })

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={cln} {...handle}>
      <div
        className={css.contain}
        onClick={() => {
          if (trigger === 'click') {
            setIsShow(!isShow)
          }
        }}
        onMouseEnter={() => {
          if (trigger === 'hover') {
            setIsShow(true)
          }
        }}
        onMouseLeave={() => {
          if (trigger === 'hover') {
            setIsShow(false)
          }
        }}>
        {children}
        <div className={css[placeClassName]}>
          {isShow ? (
            <Suspense fallback={<div>Garish tooltip loading...</div>}>
              <TooltipContext.Provider value={{color, placeClassName}}>
                <Component>{title}</Component>
              </TooltipContext.Provider>
            </Suspense>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

Tooltip.defaultProps = {
  garish: 'default',
  trigger: 'click',
  placement: 'top',
  color: '#000',
}
export default Tooltip
