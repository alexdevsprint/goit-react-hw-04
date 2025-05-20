import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <div className={css.container}>

    
    <ul className={css.imageGalleryList}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            pic={photo.urls.small}
            desc={photo.alt_description}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
    </div>
  );
}
