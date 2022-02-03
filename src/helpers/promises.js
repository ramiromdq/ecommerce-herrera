import itemsAPI from "../data/products";

export const promisesItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(itemsAPI);
  }, 2000);
});
