import css from './LoadMoreBtn.module.css'


export default function LoadMoreBtn({onLoadMoreClick}) {
    return (
        <>
            <button type="button" onClick={onLoadMoreClick}>Load more ...</button>
        </>
    )
}