import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";



export function useCategory() {

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})

    useEffect(() => {

        axiosInstance.get("categories/")
            .then(res => {
                setcategories(res.data)
                setloading(false)
            })
            .catch(err => {
                setloading(false)
                seterror(err)
            })

    }, [])

    return {categories, loading, error}
}