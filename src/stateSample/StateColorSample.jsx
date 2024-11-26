import React, { useState } from 'react'

function StateColorSample() {

    const [color, setcolor] = useState("tomato")

    return <>
    <button onClick={() => setcolor("black")}>Change Color</button>
    <hr />
    <div style={{width:200, height:200, backgroundColor:color}}>

    </div>
    </>
}

export default StateColorSample