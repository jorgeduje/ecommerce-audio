import productsInstance from "./axiosInstance";

export const getAllProducts = () => {
  return productsInstance.get("");
};

export const getProductById = (id) => {
  return productsInstance.get(`/${id}`);
};
