export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <>
      <h2>Exporting and importing multiple components from the same file</h2>
      <section>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
