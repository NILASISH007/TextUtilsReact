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
    const handleDownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
    }
    const [text , setText]=useState('Enter text Here')
  return (
    <>
            <div className="container my-2">
            <h3>{props.heading}</h3>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-warning mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
       <button className="btn btn-warning mx-2" onClick={handleClearClick}>clear</button>

            </div>
            <div className="container my-2">
                <h2>Review Paragraph</h2>
                <p>In this Paragraph there are {text.length} characters and  {text.split(" ").length}</p>
                <p>It will take { 0.008 * text.split(" ").length } minutes to read.</p>
            </div>
            </>
  )
}
