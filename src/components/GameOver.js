import React from 'react'

export default function GameOver({ show, handleRestart }) {
    { console.log(show) }

    return (
        show &&
        <div id="gameOver">

            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={handleRestart}>Jogue novamente</button>
        </div>
    )
}

