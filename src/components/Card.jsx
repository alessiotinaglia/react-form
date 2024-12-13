
function card({ cityImages }) {
    return (
        <div className="row p-5">
            {cityImages.map((element) => (
                <div key={element.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card">
                        <img className="card-foto" src={element.img} alt="Card image" />
                        <div className="card-body">
                            <h5>{element.title}</h5>
                            <p>{element.description}</p>
                            <a href="#" className="btn btn-primary m-2">Prenota ora</a>
                            <a href="#" className="btn btn-success">Vedi offerte per te</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default card;