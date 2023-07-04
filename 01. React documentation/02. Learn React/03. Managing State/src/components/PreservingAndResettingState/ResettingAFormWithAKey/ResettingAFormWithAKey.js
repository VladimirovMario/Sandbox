import { useState } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';

export default function ResettingAFormWithAKey() {
  return (
    <>
      <h2>Resetting a form with a key</h2>
      <Messenger />
    </>
  );
}

function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to}/>
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
