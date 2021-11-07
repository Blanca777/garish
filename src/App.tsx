import React from 'react'
import classNames from 'classnames'
import Button from './components/button'
import ChooseCard, {CCItem} from './components/chooseCard'
// import Alert from './components/alert'
import css from './App.module.scss'

const App: React.FC = () => {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <div>
      <div className={classNames(css.box, css.btnBox)}>
        <Button garish="default" onClick={handleClick}>
          default
        </Button>
        <Button garish="flowline" onClick={handleClick}>
          flowline
        </Button>
        <Button garish="flowlight" onClick={handleClick}>
          flowlight
        </Button>
      </div>

      <div className={classNames(css.box, css.btnBox)}>
        <ChooseCard garish="default" onClick={handleClick}>
          <CCItem>1</CCItem>
          <CCItem>2</CCItem>
        </ChooseCard>
      </div>

      <div className={classNames(css.box, css.alertBox)}>
        {/* <Alert onClick={handleClick}>Alert1</Alert> */}
        {/* <Alert garish="default" onClick={handleClick}>
          Alert2
        </Alert> */}
      </div>
    </div>
  )
}

export default App
