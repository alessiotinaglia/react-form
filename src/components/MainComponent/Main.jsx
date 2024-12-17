import Card from "./Card";
import cityImages from "../../dati/array";
import style from './Main.module.css';
import Form from './ArticleForm';
import { useState } from "react";

function Main() {
    // Filtra e salva le immagini pubblicate
    const _publishedCityImages = cityImages.filter(city => city.published);
    const [publishedCityImages, setPublishedCityImages] = useState(_publishedCityImages);

    // Funzione per aggiungere un nuovo articolo
    const handleArticleSubmit = (newCityImage) => {
        console.log(newCityImage);
        setPublishedCityImages([...publishedCityImages, newCityImage]);
    }

    // Funzione per eliminare una città
    const handleDelete = (id) => {
        const updatedImages = publishedCityImages.filter(city => city.id !== id);
        setPublishedCityImages(updatedImages);
    };

    return (
        <main>
            <Form publishedCityImages={publishedCityImages} onSubmit={handleArticleSubmit} />
            <div className={`row container ${style.containerCustom}`}>
                {publishedCityImages.map((element) => (
                    <Card
                        key={element.id}
                        cityImage={element}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </main>
    );
}

export default Main;
