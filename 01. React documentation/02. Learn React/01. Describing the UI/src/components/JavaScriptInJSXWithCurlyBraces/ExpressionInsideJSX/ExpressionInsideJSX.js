const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "b",
  theme: {
    backgroundColor: "black",
    color: "pink",
    padding: "20px",
    borderRadius: "12px",
  },
};

export default function ExpressionInsideJSX() {
  return (
    <>
      <h2>Challenge 3 of 3: Write an expression inside JSX curly braces </h2>
      <div style={person.theme}>
        <h3>{person.name}'s Todos</h3>
        <img
          className="avatar"
          src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
