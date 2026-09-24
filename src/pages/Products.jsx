import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import books from "../data/books";

function Products({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchSearch = book.title.toLowerCase().includes(search.toLowerCase().trim());
      const matchCategory = category === "All" || book.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="container">
          <span className="eyebrow">Our Collection</span>
          <h1>Find a book for your next skill.</h1>
          <p>Search by title or narrow the catalogue by category.</p>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="filter-panel">
            <SearchBar search={search} setSearch={setSearch} />
            <label className="select-wrap">
              <SlidersHorizontal size={18} />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <div className="results-row">
            <p><strong>{filteredBooks.length}</strong> book{filteredBooks.length !== 1 ? "s" : ""} found</p>
            {(search || category !== "All") && (
              <button className="clear-btn" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button>
            )}
          </div>

          {filteredBooks.length > 0 ? (
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No books found</h3>
              <p>Try another title or choose a different category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Products;
