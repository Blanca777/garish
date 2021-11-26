import React, {useEffect, useState, useRef} from 'react'
// import classNames from 'classnames'
// import css from './index.module.scss'
import {ICheckbox, ICheckboxGroup, Option} from './interface'
// export const CheckboxGroup: React.FC<ICheckboxGroup> = props => {
//   const {defaultValue, disabled, name, options, value} = props
//   const [list, setList] = useState<string[] | Option[]>(['123'])
//   useEffect(() => {
//     setList(options !== undefined ? options : [])
//   }, [options])
//   return list.map(item => {
//     return <div>{item}</div>
//   })
// }

const Checkbox: React.FC<ICheckbox> = props => {
  const {children, defaultChecked, onChange, disabled, checked, autoFocus} = props
  const eleRef = useRef<HTMLInputElement>(null)
  const [ischecked, setIsChecked] = useState<boolean>(false)
  // const [isAutoFocus, setIsAutoFocus] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked !== undefined) {
      // 有props.checked属性传入时，变为受控组件，选中与否，完全由传入props.checked决定
      onChange && onChange(e)
    } else {
      // 没有checked属性传入时，变为非受控组件，选中与否，由ischecked决定，props.onchange参数有e(.target.checked)
      setIsChecked(!ischecked)
      onChange && onChange(e)
    }
  }
  useEffect(() => {
    if (autoFocus) {
      eleRef.current?.focus()
    }
  }, [autoFocus])
  useEffect(() => {
    // checked的优先级比defaultChecked高，
    setIsChecked(checked !== undefined ? checked : defaultChecked !== undefined ? defaultChecked : false)
  }, [checked, defaultChecked])
  return (
    <label>
      <span>
        <input ref={eleRef} type="checkbox" onChange={e => handleChange(e)} disabled={disabled} checked={ischecked} />
      </span>
      <span>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = {
  garish: 'default',
}
// CheckboxGroup.defaultProps = {
//   defaultValue: [],
//   disabled: false,
//   options: [],
//   value: [],
// }
export default Checkbox
