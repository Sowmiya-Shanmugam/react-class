import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function ProductForm({ onSubmit, initialData, onCancel }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file); // convert image to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Regular Expression validations
const titleRegex = /^.{3,}$/; 
const descriptionRegex = /^.{10,}$/; 
const categoryRegex = /^(?!\s*$)[A-Za-z\s']{3,}$/;
const priceRegex = /^(?!0\d)\d+(\.\d{1,2})?$/; 
const imageRegex = /^(https?:\/\/.*\.(png|jpg|jpeg|gif|webp)$)|(^data:image\/[a-z]+;base64,)/i; 


   if (!titleRegex.test(product.title)) {
    toast.error(" Title must be at least 3 characters");
    return;
  }
  if (!descriptionRegex.test(product.description)) {
    toast.error(" Description must be at least 10 characters");
    return;
  }
  if (!categoryRegex.test(product.category)) {
    toast.error(" Category must be at least 3 letters");
    return;
  }
  if (!priceRegex.test(product.price)) {
    toast.error(" Price must be a valid number greater than 0");
    return;
  }
  if (!product.image || !imageRegex.test(product.image)) {
    toast.error(" Please provide a valid image URL or upload an image");
    return;
  }

  onSubmit(product);
  toast.success(" Product saved successfully!");
};

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={product.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={product.image}
        onChange={handleChange}
      />

      {/* OR Upload Image */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Preview */}
      {product.image && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={product.image}
            alt="Preview"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>
      )}

      <div className="btn-group">
        <button type="submit" className="amazon-btn">
          Save
        </button>
        {onCancel && (
          <button type="button" className="amazon-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
