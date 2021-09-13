import {
  EXEMPTED_ITEMS_BY_CATEGORY,
  SALES_TAX,
  IMPORT_DUTY
} from "./Constants";
import { buildFlatListFromObject } from "./Utils";

/**
 * Class for regular item
 */
export default class Item {
  static EXEMPTED_ITEMS = buildFlatListFromObject(EXEMPTED_ITEMS_BY_CATEGORY);

  constructor(name, qty, unitPrice) {
    this.name = name;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  /**
   * Check if the item is part of exempted items list
   */
  isTaxExemptable = () => Item.EXEMPTED_ITEMS.includes(this.name.toLowerCase());

  itemPrice = () => this.qty * this.unitPrice;

  getSalesTax() {
    let salesTax = 0.0;
    if (!this.isTaxExemptable()) {
      salesTax = this.itemPrice() * SALES_TAX;
    }
    return salesTax;
  }

  /**
   * Returns sales tax of an item.
   *
   * if the item is tax exemptable, no sales tax will be applicable;
   * otherwise sales tax will be applicable
   */
  get salesTax() {
    return parseFloat(this.getSalesTax().toFixed(2));
  }

  /**
   * Returns sales price of an item
   */
  get salePrice() {
    return parseFloat((this.itemPrice() + this.salesTax).toFixed(2));
  }
}
