import Item from "../sales/Item";

describe("Test for Item class features", () => {
  it("Create a new Item", () => {
    const item = new Item("Apple", 2, 2.5);
    const { name, qty, unitPrice } = item;

    expect(name).toBe("Apple");
    expect(qty).toBe(2);
    expect(unitPrice).toBe(2.5);

    expect(item.isTaxExemptable()).toBe(false);
    expect(item.itemPrice()).toBe(5.0);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - 1 Qty", () => {
    const item = new Item("Apple", 1, 2.49);
    expect(item.salesTax).toBe(0.25);
    expect(item.salePrice).toBe(2.74);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - 2 Qty", () => {
    const item = new Item("Apple", 2, 2.49);
    expect(item.salesTax).toBe(0.5);
    expect(item.salePrice).toBe(5.48);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - N Qty", () => {
    const item = new Item("Apple", 8, 2.49);
    expect(item.salesTax).toBe(1.99);
    expect(item.salePrice).toBe(21.91);
  });

  it("Check item if exemptable", () => {
    const item = new Item("paracetamol 650", 1, 1.29);
    expect(item.isTaxExemptable()).toBe(true);
  });

  it("Check non-exempted item if exemptable", () => {
    const item = new Item("pack of bath tissue", 2, 2.24);
    expect(item.isTaxExemptable()).toBe(false);
  });

  it("Calculate Sales Tax and Amount of exempted item - 1 Qty", () => {
    const item = new Item("chocolate bar", 1, 2.11);
    expect(item.salesTax).toBe(0.0);
    expect(item.salePrice).toBe(2.11);
  });

  it("Calculate Sales Tax and Amount of exempted item - 2 Qty", () => {
    const item = new Item("chocolate bar", 2, 2.11);
    expect(item.salesTax).toBe(0.0);
    expect(item.salePrice).toBe(4.22);
  });

  it("Calculate Sales Tax and Amount of exempted item - N Qty", () => {
    const item = new Item("chocolate bar", 5, 2.11);
    expect(item.salesTax).toBe(0.0);
    expect(item.salePrice).toBe(10.55);
  });
});
