export default function Chat({ message, contact, dispatch }) {
  return (
    <section style={{ float: 'left', marginBottom: '20px' }}>
      <textarea
        value={message}
        placeholder={'Chat to: ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
