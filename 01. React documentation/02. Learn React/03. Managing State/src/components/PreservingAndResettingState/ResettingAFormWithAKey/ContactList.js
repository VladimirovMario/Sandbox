export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section style={{ float: 'left', marginBottom: '20px' }}>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
