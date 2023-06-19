export default function SpotTheMistake() {
  return (
    <>
      <h2>Challenge 3 of 4: Spot the mistake</h2>
      <section>
        <h3>Amazing scientists</h3>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}

function Profile() {
  return (
    <img
      style={{ margin: "0 10px 10px 0" }}
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
