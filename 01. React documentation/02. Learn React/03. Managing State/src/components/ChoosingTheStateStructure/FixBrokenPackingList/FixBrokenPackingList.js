import { useState } from 'react';
import AddItem from './AddItem';
import PackingList from './PackingList';

export default function FixBrokenPackingList() {
  return (
    <>
      <h2>Challenge 2 of 4: Fix a broken packing list </h2>
      <TravelPlan />
    </>
  );
}

const nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const packed = items.filter((item) => item.packed);

  function handleAddItem(title) {
    if (title) {
      setItems([...items, { id: nextId + 1, title, packed: false }]);
    }
  }

  function handleChangeItem(nextItem) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDelete(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDelete}
      />
      <hr />
      <b>
        {packed.length} out of {items.length} packed!
      </b>
    </>
  );
}
