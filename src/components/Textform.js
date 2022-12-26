import React, { useState } from 'react'


export default function Textform(props) {
   const handleUpClick= ()=>
    {
        // console.log("UPPERCASE WAS CLICKED "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case", "success")
    }
    const handleLoClick=()=>
    {
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("converted to lower case", "success")
        
        
    }
    const handleClearClick=()=>
    {
        let newText2="";
        setText(newText2);
        props.showAlert("text cleared", "success")

    }
    const handleCopy=()=>
    {
     var text=document.getElementById("mybox");
     text.select();
     text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("text copied", "success")
    }

const handleRemoveExtaSpaces=()=>
{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra space removed", "success")
}



    
   const handleOnChange= (event) =>
    {
        // console.log("on change");
        setText(event.target.value)
    }
   const [text, setText] = useState("");
   

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h1> {props.heading}</h1>
      <div className="mb-3">
  {/* <label for="mybox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='light'?'grey':'white', color: props.mode==='dark'?'#042743':'#042743'}} ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx=2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx=2" onClick={handleClearClick}>clear</button>
<button className="btn btn-primary mx=2" onClick={handleCopy}>copy</button>
<button className="btn btn-primary mx=2" onClick={handleRemoveExtaSpaces}>remove extra space</button>


    </div>
    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text summery</h1>
        <p> {text.split (" ").length-1}words {text.length}characters</p>
        <p>{0.08 * text.split (" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview here"}</p>
    </div>
   </>

  )
}
