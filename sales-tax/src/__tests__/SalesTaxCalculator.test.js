import SalesTaxCalculator from "../sales/SalesTaxCalculator";

describe("Sales Tax Calculation", () => {
  it("Parse and calculate sales amount of 1 exempted items", () => {
    const salesData = `1 book at 12.49`;
    const expectedItemsList = [
      {
        name: "book",
        qty: 1,
        unitPrice: 12.49
      }
    ];

    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(0.0);
    expect(stc.getTotalSalesAmount()).toBe(12.49);
  });

  it("Parse and calculate sales amount of 1 non-exempted items", () => {
    const salesData = `1 strawberry ice cream at 4.45`;
    const expectedItemsList = [
      {
        name: "strawberry ice cream",
        qty: 1,
        unitPrice: 4.45
      }
    ];

    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(0.45);
    expect(stc.getTotalSalesAmount()).toBe(4.9);
  });

  it("Parse and calculate sales amount of 3 items", () => {
    const salesData = `1 book at 12.49
    1 music CD at 14.99
    1 chocolate bar at 0.85`;

    const expectedItemsList = [
      {
        name: "book",
        qty: 1,
        unitPrice: 12.49
      },
      {
        name: "music CD",
        qty: 1,
        unitPrice: 14.99
      },
      {
        name: "chocolate bar",
        qty: 1,
        unitPrice: 0.85
      }
    ];
    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(1.5);
    expect(stc.getTotalSalesAmount()).toBe(29.83);
  });

  it("Parse and calculate sales amount of 1 Imported items", () => {
    const salesData = `1 imported bottle of perfume at 47.50`;

    const expectedItemsList = [
      {
        name: "bottle of perfume",
        qty: 1,
        unitPrice: 47.5
      }
    ];
    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(7.13);
    expect(stc.getTotalSalesAmount()).toBe(54.63);
  });

  it("Parse and calculate sales amount of 2 Imported items", () => {
    const salesData = `1 imported box of chocolates at 10.00
    1 imported bottle of perfume at 47.50`;

    const expectedItemsList = [
      {
        name: "box of chocolates",
        qty: 1,
        unitPrice: 10.0
      },
      {
        name: "bottle of perfume",
        qty: 1,
        unitPrice: 47.5
      }
    ];
    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(7.63);
    expect(stc.getTotalSalesAmount()).toBe(65.13);
  });

  it("Parse and calculate sales amount of both Non-imported & Imported items", () => {
    const salesData = `2 box of lindor chocolate at 8.75
    2 paracetamol 650 at 2.45
    1 imported bottle of perfume at 47.50`;

    const expectedItemsList = [
      {
        name: "box of lindor chocolate",
        qty: 2,
        unitPrice: 8.75
      },
      {
        name: "paracetamol 650",
        qty: 2,
        unitPrice: 2.45
      },
      {
        name: "bottle of perfume",
        qty: 1,
        unitPrice: 47.5
      }
    ];
    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(expectedItemsList.length);

    for (let i = 0; i < stc.getItemsList().length; i++) {
      let { name, qty, unitPrice } = stc.getItemsList()[i];
      expect({ name, qty, unitPrice }).toStrictEqual(expectedItemsList[i]);
    }

    expect(stc.getTotalSalesTax()).toBe(7.13);
    expect(stc.getTotalSalesAmount()).toBe(77.03);
  });

  it("Parse and calculate sales amount with empty input string", () => {
    const salesData = "";
    const stc = new SalesTaxCalculator(salesData);
    expect(stc.getItemsList().length).toBe(0);
    expect(stc.getTotalSalesTax()).toBe(0.0);
    expect(stc.getTotalSalesAmount()).toBe(0.0);
  });
});
