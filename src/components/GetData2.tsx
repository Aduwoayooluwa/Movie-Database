import React from 'react'

type Props = {
    data: any
}

const GetData2 = ({data}: Props) => {
  return (
    <div>
        <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default GetData2