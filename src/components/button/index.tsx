import React, {Suspense} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'
interface buttonProps {
  btnType?: string
  className?: string
}

const Button: React.FC<buttonProps> = ({btnType, className, children}) => {
  const cln = classNames(className, css.wrapper)
  const Component = React.lazy(() => import(`./${btnType}`))
  return (
    <div className={cln}>
      <Suspense fallback={<div>Garish button loading...</div>}>
        <Component>{children}</Component>
      </Suspense>
    </div>
  )
}

Button.defaultProps = {
  btnType: 'default',
}
export default Button
