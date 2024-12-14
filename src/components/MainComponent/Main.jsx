import Card from "./Card";
import cityImages from "../../dati/array";
import style from './Main.module.css';

function Main() {
    const publishedCityImages = cityImages.filter(city => city.published)
    return (
        <main>
            <div className={`row container ${style.containerCustom}`}>
                {publishedCityImages.map((element) => (
                    <Card key={element.id} cityImage={element} />
                ))}
            </div>
        </main>
    );
}

export default Main;
