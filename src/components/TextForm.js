import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        setText("You Hve Clicked HandleUpClick Funtion")
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Uppercase Was clicked" + text)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
     
    }
    const [text , setText]=useState('Enter text Here')
  return (
            <div>
            <h3>{props.heading}</h3>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-warning" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
  )
}
