import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearchSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.searchQuery.value.trim();
    if (query === "") {
      toast.error("Please enter some text for search!");
      return;
    }

    onSearchSubmit(query);
    form.reset();
  };

  return (    
    <header className={css.header}>
      <div className={css.container}>
      <h1 className={css.gallaryTitle}>Gallery</h1>
      <form className={css.searchForm} onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      </div>
    </header>
  );
}
