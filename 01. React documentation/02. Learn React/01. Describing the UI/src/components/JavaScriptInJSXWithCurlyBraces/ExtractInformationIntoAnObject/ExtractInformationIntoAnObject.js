const person = {
  name: "Gregorio Y. Zara",
  imgUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  imgDescription: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
    padding: "20px",
    borderRadius: "12px",
  },
};

export default function ExtractInformationIntoAnObject() {
  return (
    <>
      <h2>Challenge 2 of 3: Extract information into an object</h2>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.imgUrl}
          alt={person.imgDescription}
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
