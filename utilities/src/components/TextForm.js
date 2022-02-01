import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to Uppercase!","success")
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to Lowercase!","success")

    }

    const handleClearClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        // props.showAlert("TextBox cleared","success")

    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Text Copied!","success")



    }

    const [text, setText] = useState('');
    // text = "Change the text" // This is the wrong way to update the text in ReactJs 
    // setText("Change the text here") // This is the correct way to update the text in ReactJs 

    return (
        <>
            <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#696969':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btm btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upercase</button>
                <button className="btm btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btm btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btm btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} <b>words</b> and {text.length} <b>characters</b></p>
                <p>{0.008 * (text.split(" ").length - 1)} <b> Total minutes read</b></p>
                <h2>Preview of your text</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
            </div>
        </>
            
    )
}
