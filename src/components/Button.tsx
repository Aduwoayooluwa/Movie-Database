import React from 'react'
import { themeColor } from '../stores/menu'

type Props = {
    name: string,
}

const Button = ({name}: Props) => {
  return (
    <button onClick={themeColor} className="p-2 text-white bg-transparent">{name}</button>
  )
}

export default Button