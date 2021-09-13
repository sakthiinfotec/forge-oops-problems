import { ITEM_PATTERN } from "./Constants";
import Item from "./Item";
import ImportedItem from "./ImportedItem";

/**
 * Class to build item list and calculate total sales tax and total sale amount
 */
export default class SalesTaxCalculator {
  constructor(data) {
    this.totalSalesTax = 0.0;
    this.totalSalesAmount = 0.0;
    this.itemsList = [];
    this.parseAndCalculateSalesData(data);
  }

  /**
   * Build a regular item or imported item object from the RegEx match object
   *
   * @param {RegExp} match - RegEx match object of a single item
   */
  buildItem(match) {
    if (!match || !match.groups) return;
    if (match.groups.imported) {
      return new ImportedItem(
        match.groups.name,
        parseInt(match.groups.qty, 10),
        parseFloat(match.groups.price)
      );
    } else {
      return new Item(
        match.groups.name,
        parseInt(match.groups.qty, 10),
        parseFloat(match.groups.price)
      );
    }
  }

  /**
   * Iterate and pattern match the sales order details line by line,
   * build item, items list, and calculate total sales tax & total sale amount.
   *
   * @param {String} data - Multiline string of Sales order
   */
  parseAndCalculateSalesData(data) {
    // Match RegEx pattern for regular and imported item
    let match = ITEM_PATTERN.exec(data);
    if (!match) return;

    do {
      // Build item
      const item = this.buildItem(match);

      // Add to items list
      this.itemsList.push(item);

      // Calculate total sales tax and total sales amount
      this.totalSalesTax += item.salesTax;
      this.totalSalesAmount += item.salePrice;

      match = ITEM_PATTERN.exec(data);
    } while (match !== null);
  }

  getItemsList() {
    return this.itemsList;
  }

  getTotalSalesTax() {
    return this.totalSalesTax;
  }

  getTotalSalesAmount() {
    return this.totalSalesAmount;
  }
}
