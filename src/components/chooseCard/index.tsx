import React, {Suspense} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
import {props} from './interface'

let garishProps = 'default'
export const CCItem: React.FC<props> = ({garish, className, children, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${garishProps}`))
  return (
    <div className={cln} {...handle}>
      <Suspense fallback={<div>Garish CCItem loading...</div>}>
        <Component>{children}</Component>
      </Suspense>
    </div>
  )
}
const ChooseCard: React.FC<props> = ({garish, className, children, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  garish && (garishProps = garish)
  return (
    <div className={cln} {...handle}>
      <Suspense fallback={<div>Garish ChooseCard loading...</div>}>{children}</Suspense>
    </div>
  )
}

ChooseCard.defaultProps = {
  garish: garishProps,
}
export default ChooseCard
