import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <input type="text"  className='w-full p-3 my-3 text-slate-900 rounded-md outline-none' placeholder='Search Any Movie, tv or actors' />
    )
}

export default Search