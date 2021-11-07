import React, {Suspense} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
import {alertProps} from './interface'

const Alert: React.FC<alertProps> = ({garish, className, children, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${garish}`))
  return (
    <div className={cln} {...handle}>
      <Suspense fallback={<div>Garish alert loading...</div>}>
        <Component>{children}</Component>
      </Suspense>
    </div>
  )
}

Alert.defaultProps = {
  garish: 'default',
}
export default Alert
