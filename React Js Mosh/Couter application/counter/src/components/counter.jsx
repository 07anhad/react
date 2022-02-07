import React, { Component } from 'react'
class Counter extends React.Component {
    state = {
        count:33
        
    };
    render() {
        return (
            <React.Fragment>
                <h1><b>{this.formatCount()}</b></h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;