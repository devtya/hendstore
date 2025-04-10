// src/utils/localStorage.js

const PRODUCT_KEY = "hendstore_products";

export const getProducts = () => {
  const stored = localStorage.getItem(PRODUCT_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveProducts = (products) => {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
};
