import React, { useState } from 'react';
import GameOver from './components/GameOver';

export default function MemoryGame(text, props) {

    const [gameOver, setGameOver] = useState();

    function restartGame() {
        setGameOver(false);
    }

    return (
        <>

            <GameOver show={gameOver} handleRestart={restartGame}></GameOver>
        </>
    )
}


