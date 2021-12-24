import {useState, useEffect} from 'react';

import './styleContacts.css';

import List from './List';
import Form from './Form';

function Contacts() {

    //kayıtların tutldugu state
    const [contacts, setContacts] = useState([
        {
            fullName: 'Zeynep',
            phone_number: '123123',
        },
        {
            fullName: 'Demirel',
            phone_number: '125125',
        },
        {
            fullName: 'Patika',
            phone_number: '666623',
        }
    ]);

    //contact'e atama yapildiginda guncel hal
    useEffect(() => {
       console.log(contacts);
    }, [contacts]);

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    );
}

export default Contacts;
