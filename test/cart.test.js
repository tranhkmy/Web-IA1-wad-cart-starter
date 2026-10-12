import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

test("the example from the slides (happy path)", () => {
  const items = [
    { name: "Áo thun", price: 180000, qty: 2 },
    { name: "Sổ tay", price: 45000, qty: 1 },
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 467400);
});

test("empty cart returns 0 without shipping or vat", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal([], options), 0);
});

test("free shipping exactly at the threshold", () => {
  const items = [{ name: "Sản phẩm cao cấp", price: 500000, qty: 1 }];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  // Subtotal = 500000. VAT (8%) = 40000. Shipping = 0. Total = 540000
  assert.equal(cartTotal(items, options), 540000);
});

test("throws RangeError for negative price", () => {
  const items = [{ name: "Sản phẩm lỗi", price: -50000, qty: 1 }];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(() => cartTotal(items, options), RangeError);
});

test("throws RangeError for non-positive integer quantity", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(
    () => cartTotal([{ name: "Lỗi 1", price: 10000, qty: 0 }], options),
    RangeError,
  );
  assert.throws(
    () => cartTotal([{ name: "Lỗi 2", price: 10000, qty: -2 }], options),
    RangeError,
  );
  assert.throws(
    () => cartTotal([{ name: "Lỗi 3", price: 10000, qty: 1.5 }], options),
    RangeError,
  );
});
