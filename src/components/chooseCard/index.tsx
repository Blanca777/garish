import React, {Suspense, useEffect} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
import {props} from './interface'

let garishProps = 'default'
let value: {[x: string]: any}
let setValue: (arg0: (item: any) => void) => void

export const CCItem: React.FC<props> = ({garish, className, children, name, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${garishProps}`))
  useEffect(() => {
    setValue(item => {
      const data = {...item}

      if (name) {
        data[name as string] = false
      } else {
        data[children as string] = false
      }
      return data
    })
  }, [name])
  const CCPick = () => {
    setValue(item => {
      const data = {...item}
      if (name) {
        data[name as string] = !data[name as string]
      } else {
        data[children as string] = !data[children as string]
      }
      return data
    })
  }
  return (
    <div className={cln} onClick={CCPick} {...handle}>
      <Suspense fallback={<div>Garish CCItem loading...</div>}>
        <Component active={value && (value[name] || value[children as string])}>{children}</Component>
      </Suspense>
    </div>
  )
}
const ChooseCard: React.FC<props> = ({garish, className, children, state, ...handle}) => {
  const cln = classNames(className, css.wrapper)
  garish && (garishProps = garish)
  value = state.value
  setValue = state.setValue
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
