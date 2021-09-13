// List of exempted items by category
export const EXEMPTED_ITEMS_BY_CATEGORY = {
  books: ["book"],
  food: ["chocolate bar", "box of chocolates", "box of lindor chocolate"],
  "medical products": ["paracetamol 650", "vicks action 500", "Levolin"]
};

// Sales tax 10% or 0.10
export const SALES_TAX = 0.1;

// Import duty 5% or 0.05
export const IMPORT_DUTY = 0.05;

// Regular expression pattern to match regular and imported item
export const ITEM_PATTERN = /(?<qty>\d+) (?<imported>imported\s)?(?<name>[\w ]+) at (?<price>\d*\.\d+)/gim;
