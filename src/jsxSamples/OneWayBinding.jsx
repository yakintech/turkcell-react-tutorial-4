import React from 'react'

function OneWayBinding() {

    var city = "İstanbul"
    var population = 20000000
    var user = {
        name: "Çağatay",
        surname: "Yıldız"
    }
    var onlineStatus = false
    var title = <h1>Site Title</h1>


    return <>
        {title}
        <h1>City: {city}</h1>
        <h1>Population: {population}</h1>
        <hr />
        <h2>Name: {user.name}</h2>
        <h2>Surname: {user.surname}</h2>
        <hr />
        {
            onlineStatus == true ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
    </>
}

export default OneWayBinding