import React from "react";
import "../css/cardsoffers.css";

const CardOffers = ({card}) => {
    return (
        <>
            <div className="card text-center bg-dark">
                <div className="overflow">
                    <img className="card-img-top" src={card.image}/>
                </div>
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
