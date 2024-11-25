import React from 'react'
import MenuItem from './MenuItem'

function Menu({ menus }) {

    // let { menus } = props
    //https://www.w3schools.com/js/js_destructuring.asp
    return <>
        <div className="w3-row w3-padding-64" id="menu">
            <div className="w3-col l6 w3-padding-large">
                <h1 className="w3-center">Our Menu</h1>
                {
                    menus.map((item) => <>
                        <MenuItem item={item} />
                    </>)
                }
            </div>
            <div className="w3-col l6 w3-padding-large">
                <img
                    src="https://www.w3schools.com/w3images/tablesetting.jpg"
                    className="w3-round w3-image w3-opacity-min"
                    alt="Menu"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
        <hr />
    </>

}

export default Menu
