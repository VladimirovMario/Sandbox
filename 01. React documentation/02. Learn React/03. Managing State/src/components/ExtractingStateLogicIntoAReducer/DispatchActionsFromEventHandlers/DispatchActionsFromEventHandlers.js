import { useReducer } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';
import { messengerReducer, initialState } from './messengerReducer';

export default function DispatchActionsFromEventHandlers() {
  return (
    <>
      <h2>Challenge 1 of 4: Dispatch actions from event handlers</h2>
      <Messenger />
    </>
  );
}

function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
