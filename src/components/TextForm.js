import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        setText("You Hve Clicked HandleUpClick Funtion")
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Uppercase Was clicked" + text)
        props.showAlert("Converted to UpperCase","success ")
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
     
    }
    const handleDownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success ")
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been clear","success ")
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success ")
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Exptra space removed","success ")
       
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
       <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy</button>
       <button className="btn btn-warning mx-2" onClick={handleExtraSpace}>Remove extra space</button>

            </div>
            <div className="container my-2">
                <h2>Review Paragraph</h2>
                <p>In this Paragraph there are {text.length} characters and  {text.split(" ").length}</p>
                <p>It will take { 0.008 * text.split(" ").length } minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter any text on the white space to see the preview"}</p>
            </div>
            </>
  )
}
