import React, { useContext } from 'react'

import MessagesList from '../../Components/MessagesList/MessagesList'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'
import { ContactContext } from '../../Contexts/ContactContext'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'

export default function ContactDetailScreen() {
    const { contactSelected } = useContext(ContactDetailContext)
    
    
    if(!contactSelected){
        return (
            <div>
                <h2>Contacto no encontrado</h2>
            </div>
        )
    }
    const { updateContactById } = useContext(ContactContext)

  return (
    <div>
        <h1>Detalle contacto</h1>
        <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
        <button
            onClick={
                () => {
                    updateContactById(
                        {...contactSelected, contact_name: 'ratatoulle'},
                        contactSelected.contact_id
                    )
                }
            }
        >Cambiar</button>
        <MessagesList />
        <NewMessageForm/>
    </div>
  )
}