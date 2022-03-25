import React from "react";

const Phonebook= ({ phonebook }) =>(

    <div>
        <Header title ={phonebook.name}/>
        <Contents contacts={phonebook.contacts} />
    </div>

)
export default Phonebook;