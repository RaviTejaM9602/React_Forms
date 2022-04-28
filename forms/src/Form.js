import React, {useState} from "react";

export default function Form() {

  const[firstName, setFirstName] = useState('');
  function handleChange(event) {
    console.log(event.target.value);
  }

 return ( <div>
        <form>
        <input type="text" placeholder="First Name"  onChange={handleChange}/>
        </form>
       </div>)
};