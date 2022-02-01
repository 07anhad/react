import React from 'react';
import './Style.css';
import Menu from './menuApi' 

const Restaurant = () => {
    const myStyle = {color:'#800080'}
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle" style={myStyle}>Breakfast</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor at ea reprehenderit ullam, veniam doloremque expedita, perspiciatis voluptate unde praesentium dolorem? Tenetur, molestias vero. In eaque reiciendis, odio illo id rerum officia aliquid.</span>
                        <div className="card-read">Read More</div>
                    </div>
                    {/* <img src={image} alt="" className="class-media"/> */}
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Restaurant
