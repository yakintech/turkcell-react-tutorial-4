import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsTable() {
    const [products, setproducts] = useState(productsData)
    const [isSorted, setisSorted] = useState(false)
    const [minPrice, setminPrice] = useState(0)
    const [maxPrice, setmaxPrice] = useState(0)

    let totalPrice = 0

    products.forEach(item => {
        totalPrice = totalPrice + (item.unitPrice * item.unitsInStock)
    })

    const deleteProduct = (id) => {

        var result = window.confirm("Are u sure?")

        if (result) {
            var filteredProducts = products.filter(item => item.id != id)
            setproducts(filteredProducts)
        }
    }

    const sortByPrice = () => {
        let sortedProducts;
        if (!isSorted)
            sortedProducts = products.sort((a, b) => a.unitPrice - b.unitPrice)
        else
            sortedProducts = products.sort((a, b) => b.unitPrice - a.unitPrice)

        setproducts([...sortedProducts])
        setisSorted(!isSorted)
    }

    const search = (word) => {
        let filteredProducts = productsData.filter(q => q.name.toLocaleLowerCase().includes(word.toLowerCase()))
        setproducts(filteredProducts)
    }

    const searchByPrice = () => {
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            let filteredProducts = products.filter(q => q.unitPrice > minPrice && q.unitPrice < maxPrice)
            setproducts(filteredProducts)
        }

    }

    const reset = () => {
        setproducts(productsData)
    }

    return <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Length: {products.length}</h1>
            <button onClick={() => setproducts([])} style={{ height: 30 }}>Empty</button>
        </div>
        <div>
            <h4>Total Price: {totalPrice.toFixed(2)}</h4>
            <h4>Avarage Price: {(totalPrice / (products.length)).toFixed(2)}</h4>
        </div>
        <hr />
        <div>
            <label htmlFor="">Search: </label>
            <input onChange={(e) => search(e.target.value)} />
        </div>
        <hr />
        <div style={{ display: 'flex' }}>
            <div>
                <label htmlFor="">Min: </label>
                <input type='text' onChange={(e) => setminPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Max: </label>
                <input type='text' onChange={(e) => setmaxPrice(e.target.value)} />
            </div>
            <div>
                <button onClick={searchByPrice}>Search by Price</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        <hr />
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={sortByPrice}>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitsInStock}</td>
                        <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ProductsTable