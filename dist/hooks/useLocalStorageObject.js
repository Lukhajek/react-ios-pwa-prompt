const a = () => ({ get: (e) => {
  const t = localStorage.getItem(e);
  return t ? JSON.parse(t) : null;
}, set: (e, t) => {
  localStorage.setItem(e, JSON.stringify(t));
}, remove: (e) => {
  localStorage.removeItem(e);
} });
export {
  a as useLocalStorageObject
};
