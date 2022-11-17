export const localStorageGetItem = item => {
  JSON.parse(localStorage.getItem(item));
};

export const localStorageSetItem = (item, object) => {
  localStorage.setItem(item, JSON.stringify(object));
};
