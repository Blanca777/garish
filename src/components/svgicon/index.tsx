import React from 'react'
import {svgiconProps} from './interface'
import '@src/common/icons/importIcons'
import set from '@src/common/icons/svg/setting.svg'
const SvgIcon: React.FC<svgiconProps> = ({garish, name, size, color, ...handle}) => {
  return (
    <svg fill={color} width={size} height={size}>
      <use href={set} xlinkHref={`#${name}`} />
    </svg>
  )
}

SvgIcon.defaultProps = {
  garish: 'default',
  size: 30,
  color: '#000',
}
export default SvgIcon
