import React, { Component } from 'react'
class Counter extends React.Component {
    state = {
        count: 0,
        tags : ['tag1','tag2','tag3']
    };

    // styles = {
    //     fontSize: 20,
    // };

    //TO APPLY STYLES TO MANY SECTIONS YOU DONT HAVE TO DEFINE MANY STYLE ATTRIBUTES, YOU CAN JUST USE INLINE STYLING

    // { this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
        
    //     else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
                
    // }

    handleIncrement= () => {
        console.log('Increments Clicked',this);
    }

    render() {

        return (
            <div>
                <span className = {this.getBadgeClasses()}><b>{this.formatCount()}</b></span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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