import { useState } from 'react';
import { foods } from './data';
import { filterItems } from './filterItems';

export default function FilteringAList() {
  return (
    <>
      <h2>Challenge 2 of 2: Filtering a list</h2>
      <App />
    </>
  );
}

function App() {
  const [query, setValues] = useState('');
  const filteredItems = filterItems(foods, query);

  function handleChange(e) {
    setValues(e.target.value);
  }

  return (
    <>
      <SearchBar value={query} onChange={handleChange} />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
