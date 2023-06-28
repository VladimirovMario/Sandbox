import { useState } from 'react';

export default function UpdateAnItemInTheShoppingCart() {
  return (
    <>
      <h2>Challenge 1 of 4: Update an item in the shopping cart</h2>
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

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, count: p.count + 1 } : p
      )
    );
    /*
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
    */
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
