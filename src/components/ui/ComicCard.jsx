export default function ComicCard({ comics }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-media">
                    <img src={comic.thumb} alt={comic.title} />
                </div>
                <div className="card-content">{comic.title}</div>
            </div>
        </div>
    );
}
