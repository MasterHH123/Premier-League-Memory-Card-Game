const card = document.querySelectorAll('.card');
let flippedCards = [];
let match = 0;

card.forEach(card => {
    card.addEventListener('click', () => {
        if(flippedCards.length < 2 && !card.classList.contains('flipped'))
        card.classList.toggle('flipped')
        flippedCards.push(card);

        if(flippedCards.length === 2){
            const framework = flippedCards[0].getAttribute('data-framework');
            const framework2 = flippedCards[1].getAttribute('data-framework');

            if(framework === framework2){
                flippedCards.forEach(card => {
                    card.classList.add('guessed');
                    match++;
                });
                flippedCards = [];

                if(match === cards.length){
                    setTimeout(() => {
                        alert('Congratulations! You won.')
                        resetGame();
                    }, 500);
                }
            }
            else{
                setInterval(() => {
                    flippedCards.forEach(card => card.classList.remove('flipped'));
                    flippedCards = [];
                }, 1000);
            }
        }
    })
});


function resetGame() {
    card.forEach(card => {
        card.classList.remove('flipped', 'guessed');
    });
    shuffleCards();
    match = 0;
}

function shuffleCards() {
    card.forEach(card => {
        const randomPos = Math.floor(Math.random() * card.length);
        card.style.order = randomPos;
    });
}

shuffleCards();
//Don't flip the card 180 but rather flip the card over so it should be blank and then show the image.
