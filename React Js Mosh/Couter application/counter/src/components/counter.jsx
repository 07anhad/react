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
                <span className = {this.getBadgeClasses()}><b>{this.formatCount()}</b></span>
                <button style={{fontWeight:'bold',fontSize:20}} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "danger" : "success";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'ZERO' : count;
    }
}

export default Counter;