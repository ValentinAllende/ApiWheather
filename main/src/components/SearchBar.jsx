import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [input,setInput] = useState('')
  function seEnviolaInfo(e){
    e.preventDefault();
    if(!input) return alert('debes escribir el nombre de una ciudad')  
    else{onSearch(input);
    setInput('')}
  }
  const onInputChange= (e) =>{   
    setInput(e.target.value)
  }
  return (
    <form className='d-inline-flex p-2'onSubmit= {(e) => { seEnviolaInfo(e)}}>
      <input
      value={input}
      onChange={ e => { onInputChange(e)}} 
        type="text"
        placeholder="Ciudad..."
        className="form-control form-control-sm-center p-2"
      />
      <input  className="btn btn-sm btn-primary p-2" type="submit" value="Agregar" />
    </form>
  );
}
