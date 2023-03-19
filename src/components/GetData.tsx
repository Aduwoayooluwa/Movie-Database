import React from 'react'

type Props = {
    data: any
}

const GetData = ({ data }: Props) => {
    return (
        <div>{
            data?.results.map((item, index) => {
                return (
                    <div key={index} className='my-4 p-2'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="images" />
                        <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Date: {item.release_date}</p>
                        <p className='font-semibold text-xl my-2'>{item.title || item.original_name}</p>
                        <p className='text-sm mb-2'>{item.overview}</p>                        
                    </div>
                )
            })
            }</div>
    )
}

export default GetData