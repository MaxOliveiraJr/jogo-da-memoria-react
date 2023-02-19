import React from 'react'
import CardElement from './CardElement';

export default function GameBoard({ cards, onHandleFlip }) {
 

    return (
        <div id='gameBoard'>
            {
                cards?.map((card, index) => <CardElement onHandleFlip={onHandleFlip} key={index} card={card}></CardElement>)
            }
        </div>
    )
}
