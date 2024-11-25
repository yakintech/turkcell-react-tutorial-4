import React from 'react'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'

function PageContent() {
    let menus = [
        {
            name: "Bread Basket",
            description: "Assortment of fresh baked fruit breads and muffins",
            price: 5.50,
        },
        {
            name: "Honey Almond Granola with Fruits",
            description: "Natural cereal of honey toasted oats, raisins, almonds and dates",
            price: 7.00,
        },
        {
            name: "Baklava",
            description: "Antep baklavası",
            price: 77.50,
        },
        {
            name: "Scrambled eggs",
            description: "Scrambled eggs, roasted red pepper and garlic, with green onions",
            price: 7.50,
        },
        {
            name: "Blueberry Pancakes",
            description: "With syrup, butter and lots of berries",
            price: 8.50,
        },
    ]

    return <div className='w3-content' style={{ maxWidth: 1100 }}>
        <About />
        <Menu menus={menus} />
        <Contact />
    </div>
}

export default PageContent