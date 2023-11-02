import React from "react";

const CardOffers = ({card}) => {
    return (
        <>
            <div className="card text-center bg-dark">
            <img className="movie-grid-image " src={card.image} alt={card.title}/>
                <div className="card-body ">
                    <h4 className="card-title text-light">
                        {card.title}
                    </h4>
                    <p className="card-text text-secondary">
                    {card.description}
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default CardOffers;
