import ImportedItem from "../sales/ImportedItem";

describe("Test for ImportedItem class features", () => {
  it("Create a new ImportedItem", () => {
    const item = new ImportedItem("Apple", 2, 2.5);
    const { name, qty, unitPrice } = item;

    expect(name).toBe("Apple");
    expect(qty).toBe(2);
    expect(unitPrice).toBe(2.5);

    expect(item.isTaxExemptable()).toBe(false);
    expect(item.itemPrice()).toBe(5.0);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - 1 Qty", () => {
    const item = new ImportedItem("Apple", 1, 2.49);
    expect(item.salesTax).toBe(0.37);
    expect(item.salePrice).toBe(2.86);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - 2 Qty", () => {
    const item = new ImportedItem("Apple", 2, 2.49);
    expect(item.salesTax).toBe(0.75);
    expect(item.salePrice).toBe(5.73);
  });

  it("Calculate Sales Tax and Amount of Non-exempted item - N Qty", () => {
    const item = new ImportedItem("Apple", 8, 2.49);
    expect(item.salesTax).toBe(2.99);
    expect(item.salePrice).toBe(22.91);
  });

  it("Check item if exemptable", () => {
    const item = new ImportedItem("paracetamol 650", 1, 1.29);
    expect(item.isTaxExemptable()).toBe(true);
  });

  it("Calculate Sales Tax and Amount of exempted item - 1 Qty", () => {
    const item = new ImportedItem("chocolate bar", 1, 2.11);
    expect(item.salesTax).toBe(0.11);
    expect(item.salePrice).toBe(2.22);
  });

  it("Calculate Sales Tax and Amount of exempted item - 2 Qty", () => {
    const item = new ImportedItem("chocolate bar", 2, 2.11);
    expect(item.salesTax).toBe(0.21);
    expect(item.salePrice).toBe(4.43);
  });

  it("Calculate Sales Tax and Amount of exempted item - N Qty", () => {
    const item = new ImportedItem("chocolate bar", 5, 2.11);
    expect(item.salesTax).toBe(0.53);
    expect(item.salePrice).toBe(11.08);
  });
});
