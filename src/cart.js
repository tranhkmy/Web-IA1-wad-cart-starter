export function cartTotal(items, options) {
  // no item
  if (!items || items.length === 0) return 0;

  let subtotal = 0;
  for (const item of items) {
    // check input: price < 0 or qty isnt a positive whole number
    if (item.price < 0 || item.qty <= 0 || !Number.isInteger(item.qty)) {
      throw new RangeError("Invalid price or qty");
    }
    subtotal += item.price * item.qty;
  }
  // calculate VAT
  const vat = subtotal * options.vatRate;

  // calculate shipping fee (0 if >= freeship, else default shipFee)
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // round up result
  return Math.round(subtotal + vat + shipping);
}
