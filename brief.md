# Assignment Brief

Please implement the `cartTotal(items, options)` function in `src/cart.js` and write comprehensive unit tests in `test/cart.test.js`.

**Contract:**
- The function receives an `items` array `[{ name, price, qty }]` and an `options` object `{ vatRate, freeShipFrom, shipFee }`.
- It returns the total cost (subtotal + VAT + shipping) as a rounded number.

**Logic & Constraints:**
- Must use plain JavaScript with **no dependencies**.
- `subtotal` = sum of `price * qty`. VAT = `subtotal * vatRate`.
- Shipping = 0 when `subtotal >= freeShipFrom`, otherwise apply `shipFee`.
- An empty cart returns 0 (no VAT, no shipping).
- **Error Cases:** If `price` is negative or `qty` is not a positive integer, throw a `RangeError`.