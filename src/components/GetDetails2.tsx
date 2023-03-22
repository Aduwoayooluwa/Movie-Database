import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


type Props = {
    data: any
}

const GetDetails2 = ({ data }: Props) => {


    return (
        <div className="p-3 w-full flex flex-col items-center dark:bg-slate-700 bg-slate-100 justify-center">
            <section className='grid place-items-center'>
            <img loading='lazy' className="rounded mt-3" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path || data.profile_path || data.postal_path}`} alt="images" />
            <p className='my-2 font-semibold text-xl'>{data.original_title}</p>

            <p className='font-medium'>Place Of Birth: {data.place_of_birth}</p>
            <p className='text-sm font-semibold'>Birthday: {data.birthday}</p>
            <p>{data.birthday ? `Death: ${data.deathday}` : ''}</p>
            <p className='text-sm'>Gender: {data.gender === 1 ? 'Female' : 'Male'}</p>

            <summary className='my-3'>{data.biography}</summary>
            
            </section>
        
            </div>
    )
}

export default GetDetails2