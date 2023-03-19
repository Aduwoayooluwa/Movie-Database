import React from 'react'

type Props = {
    name: string,
    handlePag: any
}

const Button = ({name, handlePag}: Props) => {
  return (
    <button onClick={handlePag} className="p-2 text-white bg-transparent">{name}</button>
  )
}

export default Button