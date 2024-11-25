import React from 'react'
import UserAddress from './UserAddress'

function UserDetail(props) {
    return <>
        <hr />
        <h3>Name: {props.name} </h3>
        <h3>Surname: {props.surname} </h3>
        <h3>Age: {props.age} </h3>
        <hr />
        <UserAddress address={props.address} />
        <hr />
        <button onClick={props.hello}>Hello</button>
        <hr />
    </>
}

export default UserDetail
