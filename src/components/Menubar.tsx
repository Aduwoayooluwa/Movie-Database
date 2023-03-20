import React, { useReducer, useState, Reducer } from 'react'
import Button from './Button'
import Search from './Search'

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
const rootReducer: Reducer<myState, Action>  = (state, action) => {
    if (action.type === 'top_rated') {
        return { render: (<Search />)}
    }
}

const initialValue = {
    render: 4
}

const Menubar = (props: Props) => {
    const [state, dispatch] = useReducer(rootReducer, initialValue)
    
    return (
        <div className='bg-slate-900'>
            <section className="py-3 w-full flex items-center justify-evenly">
			<p className="p-2 cursor-pointer shadow hover:bg-slate-500 border border-slate-50 rounded-md ">Top Rated</p>
			<p className="p-2 cursor-pointer shadow hover:bg-slate-500 border border-slate-50 rounded-md">Now Playing</p>
			<p className="p-2 cursor-pointer shadow hover:bg-slate-500 border border-slate-50 rounded-md">Upcoming</p>
			<p className="p-2 cursor-pointer shadow hover:bg-slate-500 border border-slate-50 rounded-md">Popular</p>
			<p className="p-2 cursor-pointer shadow hover:bg-slate-500 border border-slate-50 rounded-md">Latest</p>
		</section>
        </div>
    )
}

export default Menubar