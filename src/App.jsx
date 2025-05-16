import { useState, useEffect } from 'react'
import './App.css'

import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModar from './components/ImageModal/ImageModal';
import ImageCard from './components/ImageCard/ImageCard';

import { fetchData } from './components/api';

function App() {
  


    
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fetchData('mountains', 1, 12);
        setPhotos(data.results);
      } catch (err) {
        setError('Не удалось загрузить фото');
        console.error(err);
      }
    };

    loadPhotos();
  }, []);

  return (
    <div>
      <h1>Галерея</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};




export default App
