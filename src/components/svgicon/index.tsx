import React from 'react'
// import css from './index.module.scss'
import {svgiconProps} from './interface'

const SvgIcon: React.FC<svgiconProps> = ({garish, name, ...handle}) => {
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('@src/common/svgs', false, /\.svg$/))
  } catch (error) {
    console.log(error)
  }
  return (
    <svg aria-hidden="true" {...handle}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

SvgIcon.defaultProps = {
  garish: 'default',
}
export default SvgIcon
