export const saveToStorage = (key, state) => {
  if (window && window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(state));
  }
};

export const getFromStorage = (key) => {
  if (window && window.localStorage) {
    const value = window.localStorage.getItem(key);
    return JSON.parse(value);
  }
  return null;
};
