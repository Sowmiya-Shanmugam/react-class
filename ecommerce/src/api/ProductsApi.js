import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Fetch products failed:", error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const res = await axios.post(BASE_URL, product);
    return res.data;
  } catch (error) {
    console.error("Add product failed:", error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    // send product in request body, not URL
    const res = await axios.put(`${BASE_URL}/${id}`, product);
    return res.data;
  } catch (error) {
    console.error("Update product failed:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Delete product failed:", error);
    throw error;
  }
};
