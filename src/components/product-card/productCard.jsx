import "./productCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product , addToCart}) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ₹{product.price}
          </span>

          <button
            className="add-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
              alert(`${product.title} added to cart`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;