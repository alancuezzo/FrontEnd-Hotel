import React from "react";
import "../css/cardsoffers.css";

const CardOffers = ({card}) => {
    return (
        <>
            <div className="card bg-black">
                <div className="overflow">
                    <img className="card-img-top" src={card.image}/>
                </div>
                <div className="card-body ">
                    <h4 className="card-title text-light">
                        {card.title}
                    </h4>
                    <p className="card_text">
                        <ul>
                            <li>{card.item1}</li>
                            <li>{card.item2}</li>
                            <li>{card.item3}</li>
                        </ul>
                    </p>
                </div>
                <div className="card_boton">
                    <button className="boton_reserva ">
                        <a>RESERVAR AHORA</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardOffers;
