
import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../api/ProductsApi";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "../App.css";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = async (product) => {
    setError(null);
    try {
      const newProduct = await addProduct(product);
      setProducts((prev) => [newProduct, ...prev]);
      
    } catch {
      setError("Failed to add product");
      
    }
  };

  const handleUpdate = async (product) => {
    setError(null);
    try {
      const updated = await updateProduct(product.id, product);
      setProducts((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
      setEditProduct(null);
      
    } catch {
      setError("Failed to update product");
 
    }
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success(" Product deleted successfully!");
    } catch {
      setError("Failed to delete product");
    
    }
  };

  return (
    <div>
      {/* Amazon style navbar */}
      <div className="navbar">
        <a href="/" className="logo">
          Quick<span>Picker</span>
        </a>
      </div>

      <div style={{ padding: "20px" }}>
        {error && <div style={{ color: "red" }}>{error}</div>}

        {/* Form Section */}
        <section id="add">
          {editProduct ? (
            <>
              <h2>Edit Product</h2>
              <ProductForm
                initialData={editProduct}
                onSubmit={handleUpdate}
                onCancel={() => setEditProduct(null)}
              />
            </>
          ) : (
            <>
              <h2>Add Product</h2>
              <ProductForm onSubmit={handleAdd} />
            </>
          )}
        </section>

        {/* Products List */}
        <section id="products">
          <h2>Products List</h2>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <ProductList
              products={products}
              onEdit={(product) => setEditProduct(product)}
              onDelete={handleDelete}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default AdminPage;