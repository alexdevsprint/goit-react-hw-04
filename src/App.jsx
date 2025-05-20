import { useState, useEffect } from "react";
import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { fetchData } from "./components/api";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const PER_PAGE = 12;

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
        console.log(data);

        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [query, currentPage]);

  const openModal = (pic) => {
    setSelectedImage(pic);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>      
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && currentPage < totalPages && (
        <LoadMoreBtn onLoadMoreClick={handleLoadMoreClick} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />

      <Toaster />
    </div>
  );
}

export default App;
