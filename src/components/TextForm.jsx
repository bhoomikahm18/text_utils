import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");

    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    function handleLowClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <div className='container'>
                <div className='mb-3'>
                    <h1>{props.heading}</h1>
                    <textarea value={text} onChange={handleOnChange}
                        className='form-control' id="myBox" rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary' onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className='conatiner my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.7 * text.split(" ").length} seconds to read</p>
                <h2>Preview</h2>
            </div>
        </>
    )
}

export default TextForm