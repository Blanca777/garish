import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import css from './index.module.scss'

const CCItem = (props: any) => {
  // const [active, setActive] = useState<boolean>(false)
  useEffect(() => {
    console.log(props)
  }, [])
  return <div className={classNames(css.box, props.active && css.active)}>{props.children}</div>
}

export default CCItem
