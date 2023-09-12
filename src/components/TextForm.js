import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpCLick=()=>{
        console.log("Uppercase was clicked"); 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success");
    }
    const handleDownCLick=()=>{
        console.log("lowercase was clicked");
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","Success");
    }
    const clearText=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared","Success");
    }
    const reversed = () => {
        let splitWord = text.split("");
  
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
        setText(newText)
        props.showAlert("Text Reversed","Success");
    };
  
    const copyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","Success");
    }
    const handleChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    
    const [text,setText]=useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}id="mybox" rows="7"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpCLick}>Convert To Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownCLick}>Convert To Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={reversed}>Reverse</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview!"}</p>
      </div>
      </>
    )
}
