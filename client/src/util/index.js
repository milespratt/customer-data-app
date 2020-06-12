export const apiCall = (url) => {
  return fetch(url).then((res) => res.json());
};
