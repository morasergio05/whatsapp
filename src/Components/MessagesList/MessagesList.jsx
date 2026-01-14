import React from 'react'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

export default function MessagesList(props) {
    const {contactSelected}=useContext(ContactDetailContext);
    if(contactSelected.messages && contactSelected.messages.length === 0){
        return <div>No hay mensajes para este contacto</div>
    }
  return (
    <div>
        mensajes
        {
            contactSelected && contactSelected.messages.map(
                (message)=>{
                    return(
                        <div key={message.message_id}>
                            <p>{message.message_content}</p>
                        </div>
                    )

                }
            )

        }

    </div>
  )
}

