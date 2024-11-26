import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import { Link } from 'react-router-dom'

function Suppliers() {

    const [suppliers, setsuppliers] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        axiosInstance.get("suppliers")
            .then(res => {
                setsuppliers(res.data)
                setloading(false)
            })
    }


    const deleteSupplier = (id) => {

        var result = window.confirm("Are u sure?")

        if (!result) return
        axiosInstance.delete(`suppliers/${id}`)
            .then(res => {
                loadData()
            })
    }


    return <>
        {
            loading == true ? <h1>loading...</h1> : <>
                <h1>Length: {suppliers.length}</h1>
                <table className='w3-table w3-striped'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Company Name</td>
                            <td>Contact Name</td>
                            <td>Contact Title</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers && suppliers.map(item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/suppliers/${item.id}`}>{item.companyName}</Link></td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </>
        }
    </>
}

export default Suppliers