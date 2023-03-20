import React from 'react'

type Props = {
    data: any
}

const GetData2 = ({data}: Props) => {
  return (
    <div>
        <p>{JSON.stringify(data)}</p><img className="rounded" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="images" />
        <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Date: {data.release_date}</p>
        <p className='font-semibold text-lg my-2'>{data.title || data.original_name}</p>
        
    </div>
  )
}

export default GetData2