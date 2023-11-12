import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");

    function handleUpClick(){
        console.log('On up click');
    }

    function handleOnChange(event){
        console.log('On Change');
        setText(event.target.value);
    }

    return (
        <>
            <div className='mb-3'>
                <h1>{props.heading}</h1>
                <textarea value={text} onChange={handleOnChange}
                className='form-control' id="myBox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </>
    )
}

export default TextForm