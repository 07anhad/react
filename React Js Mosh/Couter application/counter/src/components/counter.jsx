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

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
                
    }


    render() {

        return (
            <div>
                {this.state.tags.length===0 && "Please add some items"}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;