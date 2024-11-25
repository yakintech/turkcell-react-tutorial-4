import React from 'react'

function MenuItem({item}) {
    return <>
        <br />
        <h4>{item.name}</h4>
        <p className="w3-text-grey">
            {item.description} {item.price.toFixed(2)}
        </p>
    </>
}

export default MenuItem