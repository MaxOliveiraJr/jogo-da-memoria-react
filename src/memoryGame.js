import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from './game/game';

export default function MemoryGame(text, props) {

    const [gameOver, setGameOver] = useState();
    const [cards, setCards] = useState();

    useEffect(() => {
        setCards(game.createCardFromTechs())
    }, [])


    function restartGame() {
        game.clearCards();
        setCards(game.createCardFromTechs())
        setGameOver(false);
    }

    function onHandleFlip(card) {

        game.flipCard(card.id, () => {
            setGameOver(true);
        }, () => {
            setCards([...game.cards]);
        })

        setCards([...game.cards]);
    }

    return (
        <>
            <GameBoard onHandleFlip={onHandleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restartGame}></GameOver>
        </>
    )
}


