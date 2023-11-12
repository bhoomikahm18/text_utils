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

    function handleClearText(){
        setText('');
    }

    function handleCopy() {
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    
    function handleExtraSpaces(){
        let newText = text.split(/[ ]+/);
        setText(newText.json(" "));
    }

    return (
        <>
            <div className='container'>
                <div className='mb-3'>
                    <h1>{props.heading}</h1>
                    <textarea value={text} onChange={handleOnChange}
                        className='form-control' id="myBox" rows="3"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Clear Extra Space</button>
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