export default function ComicCard({ title, image }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-media">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">{title}</div>
            </div>
        </div>
    );
}
