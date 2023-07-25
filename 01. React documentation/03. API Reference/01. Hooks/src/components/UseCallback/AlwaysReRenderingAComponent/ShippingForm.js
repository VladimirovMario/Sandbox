import { memo, useState } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  /**
   * However, here is the same code with the artificial slowdown removed. Does the lack of useCallback feel noticeable or not?
   * Quite often, code without memoization works fine. If your interactions are fast enough, you don’t need memoization.
   * Keep in mind that you need to run React in production mode, disable React Developer Tools,
   * and use devices similar to the ones your app’s users have in order to get a realistic sense of what’s actually slowing down your app.
   */
  // console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  // let startTime = performance.now();
  // while (performance.now() - startTime < 500) {
  //   // Do nothing for 500 ms to emulate extremely slow code
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
