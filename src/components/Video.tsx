import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type Props = {
    data: any
    category: string
}

const Video = ({data, category}: Props) => {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
            >
                {
            data?.results.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='w-1/2 shadow rounded-md'>
                            <div  className='my-4 w-full p-2 '>
                            <iframe className='w-full '  src={`https://www.youtube.com/embed/${item.key}`}
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                                <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Date: {item.published_at}</p>
                                <p className='font-semibold text-xs md:text-lg my-2'>{item.title || item.original_name || item.name}</p>
                                {/* <p className='text-sm mb-2'>{item.overview}</p>                         */}
                            </div>
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
           
        </div>
    )
}

export default Video