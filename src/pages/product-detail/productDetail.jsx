import './productDetail.css';
import { useParams } from 'react-router-dom';
import products from '../../data/products';

function ProductDetail({addToCart}) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="product-detail">

      <div className="product-container">

        <div className="left-section">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="right-section">

          <h2 className="product-title">
            {product.title}
          </h2>

          <p className="product-category">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="product-price">
            ₹{product.price}
          </p>

          <p className="product-rating">
            ⭐⭐⭐⭐☆ (4.5)
          </p>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-actions">
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

            <button className="buy-now-btn">
              Buy Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;