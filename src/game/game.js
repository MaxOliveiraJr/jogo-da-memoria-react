let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.lockMode = true;
            this.secondCard.flipped = true;
            return true;
        }
    },

    checkMath: function () {
        return this.firstCard.icon === this.secondCard.icon
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = null;
    },

    unflipCards: function () {

        this.firstCard.flipped = false
        this.secondCard.flipped = false
        game.clearCards()
    },

    checkGameOver: function() {
        return this.cards.filter(card=>!card.flipped).length === 0;
    },

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    cards: null,

    createCardFromTechs: function () {
        this.cards = [];

        this.techs.forEach(tech => {
            this.cards.push(this.createPairFromTech(tech));
        });

        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards();

        return this.cards
    },

    createPairFromTech: function (tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },

    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    },

    flipCard:function(cardId,gameOverCallBack,noMatchCallBack){
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                if (this.checkMath()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                        gameOverCallBack()
                       
                    }
                } else {

                    setTimeout(() => {
                        this.unflipCards();
                        noMatchCallBack();
                    }, 1000)

                };
            }
        };
    }
}

export default game;