import React, {useState, useEffect} from 'react'
import css from './index.module.scss'

const CCItem = ({name, children, checked}: any) => {
  const [check, setCheck] = useState<boolean>(checked)
  console.log(CCItem)
  return (
    <label className={css.checkbox_wrapper}>
      <input type="checkbox" className={css.checkbox_input} name={name} onChange={() => setCheck(!check)} />
      <span className={css.checkbox_tile}>{children}</span>
    </label>
  )
}

export default CCItem
