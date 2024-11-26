import React, { useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import { useNavigate } from 'react-router-dom'

function AddSupplier() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")

    const navigate = useNavigate()


    const add = () => {
        let newSupplier = {
            companyName,
            contactName,
            contactTitle
        }

        axiosInstance.post("suppliers", newSupplier)
        .then(res => {
            navigate("/suppliers")
        })
    }

    return <>
    <h1>Add New Supplier</h1>
    <div style={{display:"flex", gap:10}}>
        <div>
            <label htmlFor="">Company Name: </label>
            <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name: </label>
            <input type='text' onChange={(e) => setcontactName(e.target.value)} />
        </div>
    </div>
    <div style={{display:"flex", gap:10, marginTop:30}}>
        <div>
            <label htmlFor="">Contact Title: </label>
            <input type='text' onChange={(e) => setcontactTitle(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
    </div>

    </>
}

export default AddSupplier