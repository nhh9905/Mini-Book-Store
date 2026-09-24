import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <label className="search-box">
      <Search size={19} />
      <input
        type="text"
        placeholder="Search by book title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
}

export default SearchBar;
