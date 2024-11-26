import React, { useState } from 'react'

function StateArraySample() {

    const [names, setnames] = useState(["Ali", "Ayşe", "Çağatay", "Ece", "Aykut", "Burcu"])

    return <>
        <h1>Length: {names.length}</h1>
        <hr />
        <button onClick={() => setnames([])}>Empty</button>
        <hr />
        <ul>
            {
                names.map(item => <li><h3>{item}</h3></li>)
            }
        </ul>
    </>
}

export default StateArraySample