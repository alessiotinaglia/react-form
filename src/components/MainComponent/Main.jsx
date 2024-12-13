import Card from "./Card";
import cityImages from "../../dati/array";

function Main() {
    const publishedCityImages = cityImages.filter(city => city.published)
    return (
        <main>
            <div className="row container container-custom">
                {publishedCityImages.map((element) => (
                    <Card key={element.id} cityImage={element} />
                ))}
            </div>
        </main>
    );
}

export default Main;
