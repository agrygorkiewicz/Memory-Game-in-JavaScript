document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'camera',
            img:'images/camera.png'
        },
        {
            name:'camera',
            img:'images/camera.png'
        },
        {
            name:'cassette',
            img:'images/cassette.png'
        },
        {
            name:'cassette',
            img:'images/cassette.png'
        },
        {
            name:'gameboy',
            img:'images/gameboy.png'
        },
        {
            name:'gameboy',
            img:'images/gameboy.png'
        },
        {
            name:'imac',
            img:'images/imac.png'
        },
        {
            name:'imac',
            img:'images/imac.png'
        },
        {
            name:'ipod',
            img:'images/ipod.png'
        },
        {
            name:'ipod',
            img:'images/ipod.png'
        },
        {
            name:'notebook',
            img:'images/notebook.png'
        },
        {
            name:'notebook',
            img:'images/notebook.png'
        },
        {
            name:'printer',
            img:'images/printer.png'
        },
        {
            name:'printer',
            img:'images/printer.png'
        },
        {
            name:'radio',
            img:'images/radio.png'
        },
        {
            name:'radio',
            img:'images/radio.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'images/checkbox.png')
            cards[optionTwoId].setAttribute('src', 'images/checkbox.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.jpg')
            cards[optionTwoId].setAttribute('src', 'images/back.jpg')

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }



    createBoard()
    flipCard()
    checkForMatch()
})

