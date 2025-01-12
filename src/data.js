export const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY); // API anahtarınızı konsola yazdırabilirsiniz

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value; // Burada return eklemelisiniz
  }
};
