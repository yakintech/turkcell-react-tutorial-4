import React, { useState } from 'react'

function StateIntro() {

    const [number, setnumber] = useState(0)

    console.log("State Intro component rendered!")

    const change = () => {
        // number = 200
        // document.querySelector("h1").innerHTML = "Number: " + number
        setnumber(200) //  number = 200
    }

    return <>
        <h1>Number: {number}</h1>
        <button onClick={change}>Change Number</button>
    </>
}

export default StateIntro