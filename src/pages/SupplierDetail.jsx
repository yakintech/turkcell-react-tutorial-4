import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../config/axiosInstance'

function SupplierDetail() {

    const [detail, setdetail] = useState({})

    const { id } = useParams()

    useEffect(() => {

        axiosInstance.get(`suppliers/${id}`)
        .then(res => {
            setdetail(res.data)
        })

    }, [])
    

    return <>
        <h1>Id: {id}</h1>
        <h1>Company Name: {detail.companyName}</h1>
        <h1>Contact Name: {detail.contactName}</h1>
        <h1>Contact Title: {detail.companyName}</h1>
        <h1>Street: {detail.address?.street}</h1>
        <h1>City: {detail.address?.city}</h1>
        <h1>Region: {detail.address?.region}</h1>
    </>
}

export default SupplierDetail