import React from 'react'

function UserAddress(props) {
    return <>
        <h2>Address</h2>
        <h3>City: {props.address.city} </h3>
        <h3>Street: {props.address.street}</h3>
        <h3>Region: {props.address.region}</h3>
        <h3>No: {props.address.no}</h3>
    </>
}

export default UserAddress