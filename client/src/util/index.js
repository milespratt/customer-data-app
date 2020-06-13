export const apiCall = (url) => {
  return fetch(url).then((res) => res.json());
};

// remove underscore from label and capitalize
export const makeLabel = (string) => {
  const words = string.split("_");
  const label = words.map((word) => {
    if (word === "id") {
      return word.toUpperCase();
    } else {
      return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    }
  });
  return label.join(" ");
};

// renders active values to yes/no instead of 0 or 1.
export const renderValue = (key, value, activeKey, activeValue) => {
  if (activeKey && key === activeKey) {
    return value === activeValue ? "Yes" : "No";
  } else {
    return value;
  }
};
