import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
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

        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="6" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btm btn-primary" onClick={handleUpClick}>Convert To Upercase</button>
            
        </div>
    )
}
