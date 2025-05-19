import { useState, useEffect } from "react";
import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModar from "./components/ImageModal/ImageModal";

import { fetchData } from "./components/api";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const PER_PAGE = 12;
  // useEffect(() => {
  //   const loadPhotos = async () => {
  //     try {
  //       const data = await fetchData('mountains', 1, 12);
  //       setPhotos(data.results);
  //     } catch (err) {
  //       setError('Не удалось загрузить фото');
  //       console.error(err);
  //     }
  //   };

  //   loadPhotos();
  // }, []);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
    setPhotos([]);
  };

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchData(query, currentPage, PER_PAGE);

        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [query, currentPage]);

  return (
    <div className={css.container}>
      <h1>Gallery</h1>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      <LoadMoreBtn onLoadMoreClick={handleLoadMoreClick} />
      <Toaster />
    </div>
  );
}

export default App;
