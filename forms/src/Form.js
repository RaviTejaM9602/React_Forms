import React, {useState} from "react";

export default function Form() {

  const[formData, setFormData] = useState({firstName:"",
lastName:""});

  console.log(formData);

  function handleChange(event) {
    setFormData(prevFormData => {
      return (
        {...prevFormData,
        [event.target.name]:event.target.value
        }
      )
    });
  }

 return ( <div>
        <form>
        <input type="text" placeholder="First Name"  
        onChange={handleChange}
        name="firstName"/>


        <input type="text" placeholder="First Name"  
        onChange={handleChange}
        name="lastName"/>

        </form>
       </div>)
};