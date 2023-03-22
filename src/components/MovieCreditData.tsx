import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


type Props = {
    data: any
    category?: string
}

const MovieCreditData = ({ data, category }: Props) => {


    return (
        <main className='w-full font-poppins dark:bg-slate-700 bg-slate-100'>
            <div className="px-4">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
            >
                {
            data?.cast.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='shadow rounded-md'>
                        <a href={`/${category}/${item.id}`}>
                            <div  className='my-4 p-2 '>
                                <img loading='lazy' className="rounded" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.profile_path || item.postal_path}`} alt="images" />
                                <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Date: {item.release_date}</p>
                                <p className='font-semibold text-xs md:text-lg my-2'>{item.title || item.original_name || item.name}</p>
                                {/* <p className='text-sm mb-2'>{item.overview}</p>                         */}
                            </div>
                        </a>
                        
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
            </div>
        </main>
        
    )
}

export default MovieCreditData