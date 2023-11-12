import React from 'react'

function TextForm(props) {
  return (
    <>
    <div className='mb-3'>
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className='form-label'>Example Textarea</label>
        <textarea className='form-control' id="myBox" rows="3"></textarea>
    </div>
    </>
  )
}

export default TextForm