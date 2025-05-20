import css from './LoadMoreBtn.module.css'


export default function LoadMoreBtn({onLoadMoreClick}) {
    return (
        <>
            <button class={css.loadMoreBtn}type="button" onClick={onLoadMoreClick}>Load more ...</button>
        </>
    )
}