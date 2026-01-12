import React, { useContext } from "react";
import ContactSidebar from "../../Components/ContactSideBar/ContactSideBar";
import { ContactContext } from "../../Contexts/ContactContext";
export default function HomeScreen() {
    const{updateContactById, contacts}= useContext(ContactContext)
    console.log('prueba contacto', contacts?.[0])
    return (
        <div>
            <h1>Pagina Principal</h1>
            <button
            onClick={
                () => {
                    updateContactById(
                        {...contacts[0], contact_name: 'ratatoulle'},
                        1
                    )
                }
            }
        >Cambiar</button>
            <ContactSidebar />
        </div>
    )
}
