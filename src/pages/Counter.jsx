import React, { useEffect, useState } from 'react'

function Counter() {

    const [counter, setcounter] = useState(0)

    console.log("Counter component rendered!")
    useEffect(() => {
        var randomNumber = Math.floor(Math.random() * 10000)
        setcounter(randomNumber)
    }, [])

    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
}

export default Counter