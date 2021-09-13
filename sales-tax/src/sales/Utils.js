export const buildFlatListFromObject = (object) => {
  if (!object || typeof object !== "object") {
    return [];
  }
  const reduceToFlatList = (flatList, arr) =>
    flatList.concat(arr.map((item) => item.toLowerCase()));
  return Object.values(object).reduce(reduceToFlatList, []);
};
