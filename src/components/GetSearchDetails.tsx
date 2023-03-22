import React, { useState } from 'react'
import useSWR from 'swr'

type Props = {

}

const fetcher = (url: string) => fetch(url)

const GetSearchDetails = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const url: any = `${process.env.BASE_URI}/search/keyword?api_key=${process.env.API_KEY}&language=en-US&query=${searchQuery}`
    
    const { data, isLoading, error } = useSWR(fetcher, url)
    console.log(data)
    return (
        <div>

        </div>
    )
}

export default GetSearchDetails