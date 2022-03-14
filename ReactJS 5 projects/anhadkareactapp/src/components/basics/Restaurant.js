import React, { useState } from 'react';
import './Style.css';
import Menu from './menuApi' 

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);
    return (
        <>
           
        </>
    )
}

export default Restaurant
