import { useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ResetStateWithoutEffects() {
  return (
    <>
      <h2>Challenge 3 of 4: Reset state without Effects</h2>
      <ContactManager />
    </>
  );
}

function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData) {
    setContacts((nextContacts) =>
      nextContacts.map((contact) =>
        contact.id === updatedData.id ? updatedData : contact
      )
    );
  }

  return (
    <>
      <div>
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id)}
        />
        <hr />
        <EditContact
          key={selectedContact.id}
          savedContact={selectedContact}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
