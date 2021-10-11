import React from "react";
import css from './default.module.scss'

const Default:React.FC = ({children}) => {
    return <div className={css.box}>Default-{children}</div>
};
export default Default;
