import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Products() {

  let products = [
    {
      id: 1,
      name: "IPhone",
      unitPrice: 999,
      description: "Apple smartphone"
    },
    {
      id: 2,
      name: "Samsung",
      unitPrice: 899,
      description: "Samsung smartphone"
    },
    {
      id: 3,
      name: "Huawei",
      unitPrice: 799,
      description: "Huawei smartphone"
    },
    {
      id: 4,
      name: "Xiaomi",
      unitPrice: 699,
      description: "Xiaomi smartphone"
    },
    {
      id: 5,
      name: "Oppo",
      unitPrice: 599,
      description: "Oppo smartphone"
    },
    {
      id: 6,
      name: "Vivo",
      unitPrice: 499,
      description: "Vivo smartphone"
    },
    {
      id: 7,
      name: "Realme",
      unitPrice: 399,
      description: "Realme smartphone"
    },
    {
      id: 8,
      name: "OnePlus",
      unitPrice: 699,
      description: "OnePlus smartphone"
    },
    {
      id: 9,
      name: "Sony",
      unitPrice: 799,
      description: "Sony smartphone"
    },
    {
      id: 10,
      name: "Nokia",
      unitPrice: 299,
      description: "Nokia smartphone"
    }
  ]

  const navigate = useNavigate()

  const goDetail = (item) => {
    navigate('/products/' + item.id, { state: item })
  }

  return <>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {
        products.map(item => <>
          <div style={{ height: 300, width: 200, borderStyle: 'solid' }}>
            <h1>{item.name}</h1>
            <p>{item.unitPrice.toFixed(2)}</p>
            {/* <Link to={`/products/${item.id}`}>Detail</Link> */}
            <button onClick={() => goDetail(item)}>Detail</button>
          </div>
        </>)
      }
    </div>
  </>
}

export default Products