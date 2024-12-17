import Card from "./Card";
import cityImages from "../../dati/array";
import style from './Main.module.css';
import Form from './ArticleForm';
import { useState } from "react";

function Main() {
    // filtra e con il valore buleano viene stampato se risulta true 
    const _publishedCityImages = cityImages.filter(city => city.published)
    const [publishedCityImages, setPublishedCityImages] = useState(_publishedCityImages);

    const handleArticleSubmit = (newCityImage) => {
        console.log(newCityImage);
        setPublishedCityImages([...publishedCityImages, newCityImage]);
    }

    return (
        <main>
            <Form publishedCityImages={publishedCityImages} onSubmit={handleArticleSubmit} />
            <div className={`row container ${style.containerCustom}`}>
                {publishedCityImages.map((element) => (
                    <Card key={element.id} cityImage={element} />
                ))}
            </div>
        </main>
    );
}

export default Main;
