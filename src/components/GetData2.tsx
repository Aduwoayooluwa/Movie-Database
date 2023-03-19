import React from 'react'

type Props = {
    data: any
}

const GetData2 = ({data}: Props) => {
  return (
    <div>
        <p>{data.original_name}</p>
        <p>{JSON.stringify(data)}</p>
        
    </div>
  )
}

export default GetData2