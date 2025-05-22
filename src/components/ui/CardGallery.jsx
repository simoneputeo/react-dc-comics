console.log(comics)

import ComicCard from "./ComicCard";

export default function CardGallery({ comics }) {
    return (
        <section id="comics-section">
            <div className="container">
                <div className="row">
                    {comics.map((comic, i) => (
                        <ComicCard
                            title={comic.title}
                            image={comic.thumb}
                            key={comic.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}