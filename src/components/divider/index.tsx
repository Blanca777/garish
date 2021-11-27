import React from 'react'
import css from './index.module.scss'
import classNames from 'classnames'
import {dividerProps} from './interface'

const Divider: React.FC<dividerProps> = ({
  garish,
  className,
  text,
  textPlace,
  maskColor,
  color,
  children,
  ...handle
}) => {
  const cln = classNames({
    left: textPlace === 'left',
    right: textPlace === 'right',
    center: textPlace === 'center',
  })
  const maskStyle = {
    backgroundColor: maskColor,
    color,
  }
  return (
    <div className={css.contain} {...handle}>
      <div className={classNames(css[cln], css.text)} style={maskStyle}>
        {text}
      </div>
    </div>
  )
}

Divider.defaultProps = {
  garish: 'default',
  text: '',
  textPlace: 'left',
  maskColor: '#fff',
  color: '#000',
}
export default Divider
