import css from "./ImageCard.module.css";

export default function ImageCard({ pic, desc, onImageClick }) {
  return (
    <div className={css.imageCard} onClick={() => onImageClick(pic)}>
      <img src={pic} alt={desc} />
    </div>
  );
}
