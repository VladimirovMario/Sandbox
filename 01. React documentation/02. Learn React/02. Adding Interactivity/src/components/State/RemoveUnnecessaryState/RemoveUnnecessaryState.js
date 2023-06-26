export default function RemoveUnnecessaryState() {
  return (
    <>
      <h2>Challenge 4 of 4: Remove unnecessary state</h2>
      <FeedbackForm />
    </>
  );
}

function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
