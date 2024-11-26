import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Detail() {

    const { state } = useLocation()
    const params = useParams()
    const navigate = useNavigate()


    return <>
        <h1>Detail Page</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <hr />
        <h3>ID: {state.id}</h3>
        <h3>Name: {state.name}</h3>
        <h3>Price: {state.unitPrice}</h3>
        <p>Description: {state.descriotion}</p>
    </>
}

export default Detail



//useNavigate ne iş yapar?
//useNavigate, programatik olarak yönlendirme yapmamıza olanak tanır. Yani component içerisinde bir butona tıkladığımızda belirlediğimiz bir sayfaya yönlendirme yapabiliriz. ( window.location.href gibi düşünebiliriz. ) Navigate ile başka componente data göndermek için ise, navigate fonksiyonunun ikinci parametresine state objesi göndermemiz yeterli olacaktır.

//useParams ne iş yapar?
//useParams, URL'de tanımlı olan parametreleri kullanmamızı sağlar. Örneğin url'de /products/:id şeklinde bir parametre tanımladığımızda useParams ile bu id'yi alabiliriz. Bu sayede, URL'de tanımlı olan parametreleri kullanarak component içerisinde işlem yapabiliriz. const {id} = useParams() şeklinde kullanabiliriz.

//useLocation ne iş yapar?
//useLocation açılan componentin urlini, o componente varsa gelen objeyi(usenavigate ile yollanan) almamızı sağlar. Bu sayede, component içerisinde url'de tanımlı olan parametreleri, query stringleri ve state objelerini alabiliriz. const {state} = useLocation() şeklinde kullanabiliriz.