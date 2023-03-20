import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


type Props = {
    data: any
}

const GetDetails = ({ data }: Props) => {


    return (
        <div className="w-full flex flex-col items-center justify-center">
            {/* { JSON.stringify(data) } */}
            <section className='w-full grid place-items-center'>
            <img className="rounded mt-3" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path || data.profile_path || data.postal_path}`} alt="images" />
            <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Released on: {data.release_date}</p>
            <p className='my-2 font-semibold text-xl'>{data.original_title}</p>

            <summary className='my-3 w-full md:w-1/3'>{data.overview}</summary>
            <div className='flex items-center'>
                {
                data.genres.map((item, index: number) => {
                    return (
                        <div key={index} className='border p-2 hover:bg-slate-600 rounded w-fit'>
                            <p className='text-xs'>{item.name}</p>
                        </div>
                    )
                })
            }
            </div>

            <div className='w-full my-4 grid place-items-center md:w-1/3'>
                <p className='font-semibold mb-2'>Production Companies: </p>
                <div className='grid w-2/3 gap-2 grid-cols-3 place-items-center'>
                    {
                data.production_companies.map((item, index: number) => {
                    return (
                        <div key={index} className='border py-2 px-4 hover:bg-slate-600 rounded w-full'>
                            <p className='text-xs'>{item.name}</p>
                        </div>
                    )
                })
            }
                </div>
                
            </div>

            <div className='w-full grid place-items-center md:w-1/3'>
                <p className='font-semibold mb-2'>Production Countries: </p>
                <div className='grid w-2/3 gap-2 grid-cols-3 place-items-center'>
                    {
                data.production_countries.map((item, index: number) => {
                    return (
                        <div key={index} className='border py-2 px-4 hover:bg-slate-600 rounded w-fit'>
                            <p className='text-xs'>{item.name}</p>
                        </div>
                    )
                })
            }
                </div>
                
            </div>
            
            </section>
        
            </div>
    )
}

export default GetDetails