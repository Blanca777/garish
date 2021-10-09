import React from 'react'
import css from './index.module.scss'
const Flower:React.FC = ({children}) => {
    return <div className={css.box}>flower-{children}</div>
}

export default Flower