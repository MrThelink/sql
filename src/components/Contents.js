import React from "react"
import Entry from "./Entry"


const Contents= ( {contacts} ) => {

    const maping = () => contacts.map (contact =>
        <Entry key ={contact.id} contact={contact}/>
        )

    return(
        <div>
           {maping()}
           <p>Total number of entries: {contacts.length}</p>
        </div>
    )
}

export default Contents