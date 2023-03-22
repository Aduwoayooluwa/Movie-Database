import React from 'react'
import { themeColor } from '../stores/menu'
import { defTheme, initV, isDefaultTheme } from '../stores/theme'
import { useStore } from '@nanostores/react'

type Props = {
    name: string,
}

const Button = ({name}: Props) => {
  const _isDefaultTheme = useStore(isDefaultTheme)
  return (
    <button onClick={() => {
      defTheme()
      console.log(defTheme)
    }} className="p-2 text-white bg-red-200">{name}</button>
  )
}

export default Button