import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // Not an optimal way to, the data will take time to load
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ghousetazeem")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>My Github Followers :{data.followers}
                <img className='text-center m-4' src={data.avatar_url} alt="Profile Picture" />
            </div>

        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ghousetazeem')
    return response.json()
}