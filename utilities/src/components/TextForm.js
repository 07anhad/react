import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "Change the text" // This is the wrong way to update the text in ReactJs 
    // setText("Change the text here") // This is the correct way to update the text in ReactJs 

    return (
        <>
            <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className="btm btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upercase</button>
                <button className="btm btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} <b>words</b> and {text.length} <b>characters</b></p>
                <p>{0.008 * (text.split(" ").length - 1)} <b>Minutes read</b></p>
                <h2>Preview of your text</h2>
                <p>{text}</p>
            </div>
        </>
            
    )
}
