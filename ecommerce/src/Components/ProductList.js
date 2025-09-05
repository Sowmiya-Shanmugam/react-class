function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p className="price">₹{product.price}</p>
          <p>{product.category}</p>
          <div className="btn-group">
      <button className="amazon-btn" onClick={() => onEdit(product)}>Update</button>
<button className="amazon-btn" onClick={() => onDelete(product.id)}>Delete</button>

          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList