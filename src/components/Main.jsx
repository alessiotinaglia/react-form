import Card from "./Card";
import cityImages from "../dati/array";

function Main() {
    return (
        <main>
            <div className="row container container-custom">
                {cityImages.map((element) => (
                    <Card key={element.id} cityImage={element} />
                ))}
            </div>
        </main>
    );
}

export default Main;
