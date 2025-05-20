import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMoreClick }) {
  return (
 
    <div className={css.loadMoreBtnSection}>
      <button class={css.loadMoreBtn} type="button" onClick={onLoadMoreClick}>
        Load more ...
      </button>
    </div>
      
   
  );
}
