import { ShoppingCart } from "lucide-react";

function BookCard({ book, onAddToCart }) {
  return (
    <article className="book-card">
      <div className="book-image-wrap">
        <img src={book.image} alt={book.title} className="book-image" />
        <span className="category-pill">{book.category}</span>
      </div>

      <div className="book-content">
        <div>
          <h3>{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>

        <div className="book-card-bottom">
          <strong className="book-price">{book.price.toLocaleString("vi-VN")}đ</strong>
          <button className="btn btn-primary btn-small" onClick={() => onAddToCart(book)}>
            <ShoppingCart size={17} /> Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
