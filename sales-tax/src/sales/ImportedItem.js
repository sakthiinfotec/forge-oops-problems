import { IMPORT_DUTY } from "./Constants";
import Item from "./Item";

/**
 * Class for imported item
 */
export default class ImportedItem extends Item {
  /**
   * Returns sales tax of an imported item
   */
  get salesTax() {
    return parseFloat(
      (super.getSalesTax() + this.itemPrice() * IMPORT_DUTY).toFixed(2)
    );
  }
}
