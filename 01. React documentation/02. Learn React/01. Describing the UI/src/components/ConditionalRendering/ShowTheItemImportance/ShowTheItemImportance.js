export default function ShowTheItemImportance() {
  return (
    <>
      <h2>Challenge 2 of 3: Show the item importance with &&</h2>
      <PackingList />
    </>
  );
}

function Item({ name, importance }) {
  return (
    <li>
      {name}
      {importance > 0 && " "}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h3>Sally Ride's Packing List</h3>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
