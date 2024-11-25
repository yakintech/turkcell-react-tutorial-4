import React from 'react'

function JsxArray() {

    let names = ["Çağatay", "Aykut", "Ece", "Yeşim"]

    return <>
        <ul>
            {
                names.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default JsxArray