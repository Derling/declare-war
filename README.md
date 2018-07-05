# Declare War Card Game

## Getting started 

This project was bootstrapped using<a href='https://github.com/facebook/create-react-app'> create-react-app </a>,
to get started you may want to look at the <a href='https://github.com/Derling/declare-war/blob/master/create-react-app.README.md'>README</a>

### The Rules
Each player starts by drawing four cards from a deck that has been shuffled. Each card has a [value](https://github.com/Derling/declare-war/blob/master/card-values.md "view all values"). The player who's card has a greater value gains points equal to the difference of the values of the two cards. After placing a card, the player draws a card. The game ends when both players have no cards left. The player with the most points wins!

### The game
The layout of the game is very simple, you see what cards you are holding and how many your opponent is holding. The center holds the last set of cards that were played. The number of remaining cards in the deck is just below the cards and surrounding this component are the scores of each player. A red score means that the player is losing, a green score means they are winning.
<br/>
Here is a screenshot of what the game can look like at one point.
![alt text](https://github.com/Derling/declare-war/blob/master/screenshot.png "screenshot of game")

#### Additional Notes
Although I am contempt with the state of the project there are some additional features that I would like to implement when I have the time. They can be viewed [here](https://github.com/Derling/declare-war/blob/master/missing-features.md "list of missing features").
