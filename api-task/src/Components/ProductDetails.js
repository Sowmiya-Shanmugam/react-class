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
      const response = await axios.get(
        `https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce/${id}`
      );
      setForm({
        productTitle: response.data.productTitle || "",
        productDescription: response.data.productDescription || "",
        price: response.data.price || "",
        avatar:
          response.data.avatar ||
          response.data.image ||
          "https://via.placeholder.com/150",
      });
    } catch (error) {
      toast.error("Failed to load product");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await axios.put(
          `https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce/${id}`,
          form
        );
        toast.success("Product updated successfully");
      } else {
        await axios.post(
          `https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce`,
          form
        );
        toast.success("Product added successfully");
      }
      navigate("/");
    } catch (error) {
      toast.error(isEdit ? "Update failed" : "Post failed");
    }
  };


  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://68919b86447ff4f11fbd0f3c.mockapi.io/ecommerce/${id}`
      );
      toast.success("Product deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Delete failed");
    }
  };


  if (isEdit) {
    return (
      <div className="edit-product-container">
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


  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{form.productTitle}</h2>
      <img
        src={form.avatar || "https://via.placeholder.com/150"}
        alt={form.productTitle}
        style={{ height: "380px", width: "500px" }}
      />
      <p>
        <strong>Description:</strong> {form.productDescription}
      </p>
      <p>
        <strong>Price:</strong> ${form.productPrice}
      </p>
      <p>
        <strong>Return Policy:</strong> 8-day easy return
      </p>
     
    </div>
  );
};

export default ProductDetail;
