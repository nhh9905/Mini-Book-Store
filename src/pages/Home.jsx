import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, Sparkles, ShieldCheck } from "lucide-react";
import BookCard from "../components/BookCard";
import books from "../data/books";

function Home({ onAddToCart }) {
  const featuredBooks = books.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> Curated reads for curious minds</span>
            <h1>Find your next <span>favorite book.</span></h1>
            <p>
              Explore programming, cybersecurity, AI and web development books in a simple, modern store built with React.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products">
                View Books <ArrowRight size={18} />
              </Link>
              <a className="btn btn-secondary" href="#featured">Featured picks</a>
            </div>
            <div className="hero-stats">
              <div><strong>8+</strong><span>Selected books</span></div>
              <div><strong>4</strong><span>Categories</span></div>
              <div><strong>100%</strong><span>Frontend React</span></div>
            </div>
          </div>

          <div className="hero-showcase" aria-hidden="true">
            <div className="showcase-card showcase-main">
              <span className="showcase-label">Editor's pick</span>
              <h3>The Web Application Hacker's Handbook</h3>
              <p>Security</p>
              <strong>250,000đ</strong>
            </div>
            <div className="floating-card floating-one"><BookOpenCheck size={22} /> Programming</div>
            <div className="floating-card floating-two"><ShieldCheck size={22} /> Security</div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container feature-strip">
          <div><span>01</span><div><strong>Discover</strong><p>Browse practical technology books.</p></div></div>
          <div><span>02</span><div><strong>Filter</strong><p>Search and filter by category.</p></div></div>
          <div><span>03</span><div><strong>Collect</strong><p>Add books and manage your cart.</p></div></div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Featured Books</span>
              <h2>Books worth opening</h2>
            </div>
            <Link to="/products" className="text-link">View all books <ArrowRight size={17} /></Link>
          </div>

          <div className="book-grid featured-grid">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
