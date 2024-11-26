import React from 'react'
import { useCategory } from '../hooks/useCategory'
import useSWR from 'swr'
import { axiosInstance } from '../config/axiosInstance'

function Categories() {

    const { categories, loading } = useCategory()

    // const { data, isLoading } = useSWR("categories", () => {
    //     return axiosInstance.get("categories")
    // },
    //     {
    //         refreshInterval: 4000
    //     }
    // )

    // console.log("Data", data)

    return <>
        <ul>
            {
                categories.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>
}

export default Categories