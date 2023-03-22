import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Search from './Search'
import axios from 'axios'

type Props = {

}

const fetcher = (url: string) => fetch(url)

const GetSearchDetails = () => {
    const [searchQuery, setSearchQuery] = useState("")
    
//    

    return (
        <div>
            {/* <Search /> */}
        </div>
    )
}

export default GetSearchDetails