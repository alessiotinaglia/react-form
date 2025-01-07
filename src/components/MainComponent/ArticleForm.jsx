import { useState } from 'react';

function ArticleForm({ publishedCityImages, onSubmit }) {
    const [articleTitle, setArticleTitle] = useState("");

    const inputChange = (event) => {
        setArticleTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        const newCityImage = {
            id: 10,
            img: "/NewYork.jpg",
            title: articleTitle,
            description: "La città che non dorme mai, con le sue luci brillanti e l'energia che non si ferma mai.",
            data: "Visitata Gennaio 2018",
            tags: ["#Vacanze", "#Viaggio", "#VacanzaPerfetta"],
            published: true,
        };
        onSubmit(newCityImage);

    };

    return (
        <div className="container mt-5 p-5">
            <h2>Aggiungi un Titolo Articolo</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="articleTitleInput" className="form-label">Titolo Articolo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="articleTitleInput"
                        value={articleTitle}
                        onChange={inputChange}
                        placeholder="Inserisci il titolo dell'articolo"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Aggiungi Articolo</button>
            </form>
        </div>
    );
}

export default ArticleForm;
