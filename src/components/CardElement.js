import React from 'react'

export default function CardElement({ card, onHandleFlip }) {
    return (
        <div onClick={() => onHandleFlip(card)} id={card.id} className={`card${card.flipped ? ' flip' : ''}`}>
            <div className='card_front'>
                <img className='icon' src={`assets/images/${card.icon}.png`} alt={card.icon}></img>
            </div>
            <div className='card_back'>
                {"</>"}
            </div>
        </div>
    )
}
