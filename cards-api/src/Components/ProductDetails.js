import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isEdit = location.state?.isEdit || false;

  const [form, setForm] = useState({
    productTitle: "",
    productDescription: "",
    price: "",
    avatar: "",
  });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://68919b96447ff4f11fbd0fc0.mockapi.io/product-eCommerce/${id}`);
      setForm(response.data);
    } catch (error) {
      toast.error("Failed to load product");
    }
  };

  useEffect(() => {
    if (isEdit || id) {
      fetchProduct();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await axios.put( `https://68919b96447ff4f11fbd0fc0.mockapi.io/product-eCommerce/${id}`,form);
        toast.success("Product updated successfully");
      } else {
        await axios.post(
          "https://68919b96447ff4f11fbd0fc0.mockapi.io/product-eCommerce",
          form
        );
        toast.success("Product added successfully");
      }
      navigate("/");
    } catch (error) {
      toast.error(isEdit ? "Update failed" : "Post failed");
    }
  };

  if (isEdit) {
    return (
      <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Edit Product</h2>
        <input
          name="productTitle"
          value={form.productTitle}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="avatar"
          value={form.avatar}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <textarea
          name="productDescription"
          value={form.productDescription}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
    );
  }

  // Normal View Mode
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{form.productTitle}</h2>
      <img
        src={form.avatar}
        alt={form.productTitle}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <p>
        <strong>Description:</strong> {form.productDescription}
      </p>
      <p>
        <strong>Price:</strong> ${form.price}
      </p>
      <p>
        <strong>Return Policy:</strong> 7-day easy return
      </p>
    </div>
  );
};

export default ProductDetail;
