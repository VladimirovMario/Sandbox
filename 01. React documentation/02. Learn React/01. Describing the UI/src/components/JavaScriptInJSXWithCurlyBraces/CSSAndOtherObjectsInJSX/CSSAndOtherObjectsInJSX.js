const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-Us',
        { weekday: 'long'}
    ).format(date)
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
    padding: '20px',
    borderRadius: '12px'
  },
};

export default function TodoList() {
  return (
    <>
      <h2>Using “double curlies”: CSS and other objects in JSX</h2>

      <div style={person.theme}>
        <h3>{person.name}'s Todos for "{formatDate(today)}"</h3>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul
          style={{
            backgroundColor: "black",
            color: "pink",
          }}
        >
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
