import { useState } from "react";


// styling for the page
const pageStyle = {
    padding: 40,
}

function InputComponents(){

    // using the useState hook to populate the form element
    const[form, setForm] = useState({
        lastname:"luke",
        firstname: "jones",
        email: "luke@gmail.com",
        age: 26
 })

//  calling the function to change the firstname 
//  according the user entry data in firstname field
 function firstnameChange(e){
    setForm({...form, firstname: e.target.value })
 }

 //  calling the function to change the lastname 
//  according the user entry data in lastname field
 function lastnameChange(e){
    setForm({...form, lastname: e.target.value})
 }
    return(
        <div style={pageStyle}> 
            <form>
                {/* input for firstname */}
                <input value={form.firstname} onChange={firstnameChange} />

                {/* input for lastname */}
                <input value={form.lastname} onChange={lastnameChange} />

                {/* input for email */}
                <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />

                {/* input for age */}
                <input value={form.age} onChange={(e) =>  setForm({...form, age: e.target.value})} />

                <button onClick={form}>
                    Reset info 
                </button>
            </form>




            {/* displaying the all the form fields to the user on UI */}

            <p>first name - {form.firstname}</p>
            <p>last name - {form.lastname}</p>
            <p>email address - {form.email}</p>
            <p>age - {form.age}</p>
        </div>
    )
}

export default InputComponents;