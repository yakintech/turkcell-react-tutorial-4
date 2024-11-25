import React from 'react'

function JsxEvents() {


    //Arrow functions
    const hello = () => {
        alert("Hello Reactjs!")
    }

    const hello2 = (name) => {
        alert(`Hello ${name}`)
    }

    const changeText = (e) => {
        console.log("text e", e.target.value)
    }

    const changeSelect = (e) => {
        console.log("Select e", e.target.value)
    }

    return <>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello</button>
        <button onClick={() => hello2("Türkiye")}>Hello-2</button>
        <hr />
        <input type='text' onChange={(e) => changeText(e)} />
        <hr />
        <select onChange={(e) => changeSelect(e)}>
            <option value="+90">Türkiye</option>
            <option value="+49">Almanya</option>

        </select>
    </>
}

export default JsxEvents