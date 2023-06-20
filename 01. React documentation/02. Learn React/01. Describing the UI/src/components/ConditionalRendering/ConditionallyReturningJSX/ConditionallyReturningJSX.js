export default function ConditionallyReturningJSX() {
  return <PackingList />;
}

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent += ` ✔`;
  } else {
    itemContent += ` ❌`;
  }
  return <li className="item">{itemContent}</li>;
}

function PackingList() {
  return (
    <section>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
