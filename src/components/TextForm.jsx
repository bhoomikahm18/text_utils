import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");

    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase", "success")
    }
    
    function handleOnChange(event) {
        setText(event.target.value);
    }
    
    function handleLowClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase", "success")
    }
    
    function handleClearText() {
        setText('');
        props.showAlert("Clear all the text", "success")
    }
    
    function handleCopy() {
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copies text to clipboard", "success")
    }
    
    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.json(" "));
        props.showAlert("Removed Extra Spaces", "success")
    }

    return (
        <>
            <div className='contaner' style={{
                backgroundColor: (props.mode === 'dark') ? '#495057' : '#ffffff',
                color: (props.mode === 'dark') ? '#ffffff' : '#000000'
            }}>
                <div className='container'>
                    <div className='mb-3'>
                        <h1>{props.heading}</h1>
                        <textarea value={text} onChange={handleOnChange}
                            style={{
                                backgroundColor: (props.mode === 'dark') ? '#6c757d' : '#ffffff',
                                color: (props.mode === 'dark') ? '#ffffff' : '#000000'
                            }}
                            className='form-control' id="myBox" rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear text</button>
                    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Clear Extra Space</button>
                </div>
                <div className='conatiner my-3'>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").filter(element=> element.length != 0).length} words & {text.length} characters</p>
                    <p>{0.7 * text.split(" ").length} seconds to read</p>
                    <h2>Preview</h2>
                </div>
            </div>
        </>
    )
}

export default TextForm