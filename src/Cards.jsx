export default function Cards({ elements }) {
    return (
        <div className="container d-flex justify-content-around align-items-center">
            {
                elements && elements.map((element) => (
                    <div className="card w-card" key={element.id}>
                        <img src={element.image} alt={element.name} className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center">{element.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
