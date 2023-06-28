import { useState } from 'react';

export default function RemoveItemFromCart() {
  return (
    <>
      <h2>Challenge 2 of 4: Remove an item from the shopping cart </h2>
      <ShoppingCart />
    </>
  );
}

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

/**
 * Updates the count of a product in the shopping cart based on the specified action.
 * @param {number} productId - The ID of the product to be updated.
 * @param {string} action - The action to perform on the product ('add' or 'remove').
 */
function addRemoveFromCart(productId, action) {
  setProducts((prevProducts) =>
    prevProducts
      .map((product) => {
        if (product.id === productId) {
          // If the product ID matches, update the count based on the action.
          return {
            ...product,
            count: action === 'add' ? product.count + 1 : product.count - 1,
          };
        } else {
          return product;
        }
      })
      .filter((p) => p.count > 0) // Filters out products with a count above 0.
  );
}

  const add = () => 'add';
  const remove = () => 'remove';

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              addRemoveFromCart(product.id, add());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              addRemoveFromCart(product.id, remove());
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
