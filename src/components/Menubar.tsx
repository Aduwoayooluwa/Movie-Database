import React, { useReducer, useState, Reducer } from 'react'
import Button from './Button'
import Search from './Search'
import { useStore } from '@nanostores/react'
import { initialV } from '../stores/menu'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

type Props = {}

enum ActionKind {
    top_rated = 'top_rated',
    popular = 'popular',
}

interface Action {
    type: ActionKind
    payload: any
}

interface myState {
    render: any
}


const Menubar = (props: Props) => {
    // const [state, dispatch] = useReducer(rootReducer, initialValue)

    
    return (
        <div className='bg-slate-900'>
            <Swiper
            slidesPerView={3}
            spaceBetween={20}
            >
            <section className="p-3 w-full">
                <SwiperSlide ><p className="p-2  cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md ">Movies</p></SwiperSlide>
                <SwiperSlide className="mr-2"><p className='p-2 text-center cursor-pointer shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md'>TV Series</p></SwiperSlide>
                <SwiperSlide ><p className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md">Actors</p></SwiperSlide>
                <SwiperSlide className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md">Airing Today</SwiperSlide>
                <SwiperSlide className="p-2 cursor-pointer text-center shadow text-sm hover:bg-slate-500 border border-slate-50 rounded-md">Latest</SwiperSlide>
            </section>
            </Swiper>
            
			
		
        </div>
    )
}

export default Menubar