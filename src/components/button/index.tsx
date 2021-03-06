import React, {Suspense} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
import {buttonProps} from './interface'

const Button: React.FC<buttonProps> = ({garish, className, children, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${garish}`))
  return (
    <div className={cln} {...handle}>
      <Suspense fallback={<div>Garish button loading...</div>}>
        <Component>{children}</Component>
      </Suspense>
    </div>
  )
}

Button.defaultProps = {
  garish: 'default',
}
export default Button
