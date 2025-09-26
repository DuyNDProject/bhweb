function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100 w-100">
      <div
        className="p-3 d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAddToCart(product)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
