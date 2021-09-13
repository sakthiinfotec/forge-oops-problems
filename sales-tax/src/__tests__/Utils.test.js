import { EXEMPTED_ITEMS_BY_CATEGORY } from "../sales/Constants";
import { buildFlatListFromObject } from "../sales/Utils";

describe("Test for Utils class features", () => {
  it("Test buildFlatListFromObject", () => {
    const exemptedItemsList = buildFlatListFromObject(
      EXEMPTED_ITEMS_BY_CATEGORY
    );
    expect(exemptedItemsList.length).toBe(7);

    // check for lower case item
    expect(exemptedItemsList.includes("levolin")).toBe(true);

    // should not contain upper case item
    expect(exemptedItemsList.includes("Levolin")).toBe(false);
  });

  it("Test buildFlatListFromObject with empty object should return empty array", () => {
    const exemptedItemsList = buildFlatListFromObject({});
    expect(exemptedItemsList.length).toBe(0);
  });

  it("Test buildFlatListFromObject with with non-object return empty array", () => {
    const exemptedItemsList = buildFlatListFromObject("non-object");
    expect(exemptedItemsList.length).toBe(0);
  });

  it("Test buildFlatListFromObject with with null return empty array", () => {
    const exemptedItemsList = buildFlatListFromObject(null);
    expect(exemptedItemsList.length).toBe(0);
  });
});
