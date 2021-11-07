import React from 'react'
import css from './index.module.scss'
import Button from '../../button'
const Default: React.FC = ({children}) => {
  return (
    <div className={css.box}>
      <div className={css.title}>title</div>
      <div className={css.content}>content</div>
      <div className={css.btn}>
        <Button>on</Button>
      </div>
    </div>
  )
}
export default Default
