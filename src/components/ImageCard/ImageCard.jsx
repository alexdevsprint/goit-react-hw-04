import css from "./ImageCard.module.css";

export default function ImageCard({pic,desc}) {
  return (
    <div className={css.imageCard}>
      <img src={pic} alt={desc} />
    </div>
  );
}
