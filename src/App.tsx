import React from 'react'
import Button from './components/button'
import css from './App.module.scss'
const App: React.FC = () => {
  return <Button className={css.box} btnType='flowline'>app</Button>
}

export default App
