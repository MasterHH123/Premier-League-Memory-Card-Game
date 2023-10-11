const card = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = 0;
const totalCards = card.length;

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
                    matchedCards ++;
                });
                flippedCards = [];

                if(matchedCards === totalCards){
                    setTimeout(() => {
                        alert('Congratulations! You won.')
                        resetGame();
                    }, 500);
                }
            }
            else{
                setTimeout(() => {
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
    matchedCards = 0;
}

function shuffleCards() {
    card.forEach(cards => {
        const randomPos = Math.floor(Math.random() * card.length);
        cards.style.order = randomPos;
    });
}
shuffleCards();

console.log(flippedCards);
//Don't flip the card 180 but rather flip the card over so it should be blank and then show the image.
