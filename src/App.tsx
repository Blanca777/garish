import React, {useState} from 'react'
import classNames from 'classnames'
import Button from './components/button'
import Checkbox from './components/checkbox'
import Tooltip from './components/tooltip'
import Divider from './components/divider'
import Row from './components/grid/row'
import Col from './components/grid/col'
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
      </div>

      <div className={classNames(css.box)}>
        <Tooltip title="top" placement="top" color="#542348">
          <button>top</button>
        </Tooltip>
        <Tooltip title="bottom" placement="bottom" trigger="hover">
          <button>bottom</button>
        </Tooltip>
      </div>

      <div className={classNames(css.box)}>
        <Divider></Divider>
        <Divider text="Left" textPlace="left"></Divider>
        <Divider text="Center" textPlace="center"></Divider>
        <Divider text="Right" textPlace="right" maskColor="skyblue" color="#fff"></Divider>
      </div>

      <div className={classNames(css.box)}>
        <Row align="center" justify="between" className={css.row}>
          <Col className={css.col} span={3}>
            col-4
          </Col>
          <Col className={css.col} span={3}>
            col-4
          </Col>
          <Col className={css.col} span={3}>
            col-4
          </Col>
        </Row>
      </div>

      <div className={classNames(css.box)}>
        <Row>
          <Col className={css.col} span={6}>
            col-6
          </Col>
          <Col className={css.col} span={6}>
            <Col className={css.col} span={6}>
              col--col-6
            </Col>
            <Col className={css.col} span={6}>
              col--col-6
            </Col>
          </Col>
        </Row>
      </div>

      <div className={classNames(css.box)}>
        <Row>
          <Col className={css.col} span={12}>
            col-12
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
