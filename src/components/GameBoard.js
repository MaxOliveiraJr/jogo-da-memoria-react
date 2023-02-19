import React from 'react'
import CardElement from './CardElement';

export default function GameBoard({ cards }) {
 

    return (
        <div id='gameBoard'>
            {
                cards.map((card, index) => <CardElement key={index} card={card}></CardElement>)
            }
        </div>
    )
}
