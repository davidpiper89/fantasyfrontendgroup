export const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const retrieve = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
