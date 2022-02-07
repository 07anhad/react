import React, { Component } from 'react'
class Counter extends React.Component {
    state = {
        count: 0,
        
    };

    // styles = {
    //     fontSize: 20,
    // };

    //TO APPLY STYLES TO MANY SECTIONS YOU DONT HAVE TO DEFINE MANY STYLE ATTRIBUTES, YOU CAN JUST USE INLINE STYLING

    render() {
        return (
            <div>
                <span style={{fontSize:20}} className="badge badge-primary m-2  "><b>{this.formatCount()}</b></span>
                <button style={{fontWeight:'bold',fontSize:20}} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;