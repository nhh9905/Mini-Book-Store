import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="page-main">
        <section className="section">
          <div className="container empty-cart">
            <div className="empty-cart-icon"><ShoppingBag size={34} /></div>
            <span className="eyebrow">Your Cart</span>
            <h1>Your cart is empty.</h1>
            <p>Add a few books and they will appear here.</p>
            <Link to="/products" className="btn btn-primary">Browse Books</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="container">
          <span className="eyebrow">Shopping Cart</span>
          <h1>Your selected books.</h1>
          <p>Review quantities, remove items and see your total instantly.</p>
        </div>
      </section>

      <section className="section cart-section">
        <div className="container cart-layout">
          <div className="cart-list-wrap">
            <Link to="/products" className="back-link"><ArrowLeft size={17} /> Continue shopping</Link>

            <div className="cart-list">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <span className="category-pill static-pill">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    <strong>{item.price.toLocaleString("vi-VN")}đ</strong>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button onClick={() => onDecrease(item.id)} aria-label="Decrease quantity"><Minus size={16} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onIncrease(item.id)} aria-label="Increase quantity"><Plus size={16} /></button>
                    </div>
                    <p className="line-total">{(item.price * item.quantity).toLocaleString("vi-VN")}đ</p>
                    <button className="remove-btn" onClick={() => onRemove(item.id)}><Trash2 size={17} /> Remove</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="order-summary">
            <span className="eyebrow">Summary</span>
            <h2>Order total</h2>
            <div className="summary-line"><span>Items</span><span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="summary-line"><span>Subtotal</span><span>{total.toLocaleString("vi-VN")}đ</span></div>
            <div className="summary-line"><span>Shipping</span><span>Free</span></div>
            <div className="summary-total"><span>Total</span><strong>{total.toLocaleString("vi-VN")}đ</strong></div>
            <button className="btn btn-primary btn-full" onClick={() => alert("Checkout is a demo in this assignment.")}>Checkout</button>
            <p className="summary-note">Demo checkout only — no real payment is processed.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Cart;
