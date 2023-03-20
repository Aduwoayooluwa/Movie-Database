import React, { useReducer, useState, Reducer } from 'react'
import Button from './Button'
import Search from './Search'
import { useStore } from '@nanostores/react'
import { initialV } from '../stores/menu'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

type Props = {}

const Menubar = (props: Props) => {    
    return (
        <div className='bg-slate-900'>
            <Swiper
            slidesPerView={3}
            spaceBetween={20}
            >
            <section className="p-3 w-full">
                <SwiperSlide ><p  className={`p-2  cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md `}><a href='/'>Movies</a></p></SwiperSlide>
                <SwiperSlide className="mr-2"><p className='p-2 text-center cursor-pointer shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md'><a href='/tv'>TV</a></p></SwiperSlide>
                <SwiperSlide ><p className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md"><a href='/actors'>Actors</a></p></SwiperSlide>
                <SwiperSlide className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md">Airing Today</SwiperSlide>
                <SwiperSlide className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md">Latest</SwiperSlide>
            </section>
            </Swiper>
            
			
		
        </div>
    )
}

export default Menubar