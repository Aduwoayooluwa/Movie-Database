import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


type Props = {
    data: any
    category: string
}

const BannerData = ({ data, category }: Props) => {


    return (
        <main className='w-full'>
            <div className="px-4">
            <Swiper
                slidesPerView={1}
            >
                {
            data?.results.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <a href={`${category}/${item.id}`}>
                            <div  className='my-4 p-2'>
                                <img className="rounded" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.profile_path || item.postal_path}`} alt="images" />
                                <p className="border mt-2 border-slate-50 rounded-md hover:bg-slate-500 w-fit p-1 text-xs">Date: {item.release_date}</p>
                                <p className='font-semibold text-lg my-2'>{item.title || item.original_name || item.name}</p>
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

export default BannerData