import React, {useState} from 'react'
import classNames from 'classnames'
import Button from './components/button'
import Checkbox, {CheckboxGroup} from './components/checkbox'
import css from './App.module.scss'

const App: React.FC = () => {
  const list = [1, 2, 3]
  const [checked, setChecked] = useState<boolean>(true)
  const [disabled, setDisabled] = useState<boolean>(false)
  const plainOptions = ['Apple', 'Pear', 'Orange']
  const options = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'},
  ]
  const handleClick = () => {
    console.log('list:', list)
  }
  const skonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    e.target.focus()
    console.log('Checkbox=', e.target.checked)
  }
  const cbgonChange = (checkedValues: any[]) => {
    console.log('checked = ', checkedValues)
  }

  return (
    <div>
      <div className={classNames(css.box, css.btnBox)}>
        <Button garish="default" onClick={() => setChecked(!checked)}>
          {checked ? 'checked' : 'Unchecked'}
        </Button>
        <Button garish="flowline" onClick={() => setDisabled(!disabled)}>
          {disabled ? 'Undisabled' : 'disabled'}
        </Button>
        <Button garish="flowlight" onClick={handleClick}>
          flowlight
        </Button>
      </div>

      <div className={classNames(css.box, css.CCBox)}>
        <Checkbox onChange={skonChange} checked={checked} disabled={disabled} autoFocus>
          受控
        </Checkbox>
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={cbgonChange} />
      </div>
    </div>
  )
}

export default App
