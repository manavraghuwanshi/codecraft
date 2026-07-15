import './cart.css';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h2 className="cart-heading">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your Cart is Empty</h3>
          <p>Add some products to your cart.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="cart-image"
                />

                <div className="cart-details">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <p>
                    Quantity : {item.quantity}
                  </p>

                  <p className="subtotal">
                    Subtotal : ₹{item.price * item.quantity}
                  </p>

                </div>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Total : ₹{totalPrice}
            </h2>

            <button className="checkout-btn">
              Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;