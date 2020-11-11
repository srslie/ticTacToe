# Tic Tac Toe

Maybe you like tics. Perhaps you like tacs. Possibly you like toes.

If any of those sound like you, Tic Tac Toe is a classic game that will meet your needs!

This project allows two players to sit down together and play out a game of Tic Tac Toe; it will notify the winner and add a record of the score to their scoreboard. It will automatically reset the board to allow endless games, and allows the simple joy of logically outwitting an opponent for game and glory!

This is my final solo project for Mod 1 of Turing School.

## Skills and Technology

My goals were to hone my skills at:
  - Semantic HTML
  - Clean CSS, adding styling classes
  - Vanilla Javascript trending toward DRY code, keeping in mind SRP
  - Utilizing localStorage to hold player data
  - Version control workflow for a personal project
  - Checking for accessibility with [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

I feel that in this project I managed to improve my abilities and proved able to succeed in these areas!

## Contributors

The project was crafted and deployed by me, [Alice](https://github.com/srslie).

The project was put together by [Turing School](https://turing.io/) staff and follows [these](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html) specifications.

Special thanks to my mentor [Scott](https://github.com/sschipke) for help with my winning line and my partner, for feeding and supporting me.

## Functionality

This is how the site works:

You can win:
![gif of winning a game](https://media.giphy.com/media/gy0scAe7AGbfgNS9Ho/giphy.gif)

You can draw:
![gif of a draw](https://media.giphy.com/media/DhUDWSHthNBW5AFWyS/giphy.gif)

You can't click on a square if there's already an X or O in it:
![gif of click validation](https://media.giphy.com/media/3b9AT6IXCW8o970JSq/giphy.gif)

When a game is won, the screen switches color:
![gif of color switch](https://media.giphy.com/media/5OFCoD4h1SNoqpIHXd/giphy.gif)

When a player wins, their wins are displayed on the side panels which scroll, and the most recent win is at the top:
![gif of scrolling on play win displays, how wins populate at the top](https://media.giphy.com/media/dpUu1QdOrMXZPN7JNB/giphy.gif)

## Support and Future Plans

For technical support, please contact [Alice](mailto:aliceruppert@gmail.com).

There are no future plans, however, if time permitted I would've liked to include media querys for smaller or larger screens. While I did try for responsive CSS choices like using vh and %s, I would've liked to do a drop-down or horizontal display for the win history of each player for smaller screens.

I also wish I had time to do more animations for the win-streak getting drawn.

I made my methods intake a "marker" for each player, so future functionality could be an input for whatever players wanted to use as that marker, and the logic should still work.


## Timeline (Iterations)

Project Start: Thursday, November 5, 11am
Project Deadline: Tuesday, November 10, 9pm

Personal Deadline: Thursday, November 5, 10pm
- [x] set up local files
- [x] initialize remote repository
- [x] create this plan
- [x] provide plan to PM, add as collaborator
- [x] set-up meetings with my mentor, add as collaborator
- [x] create barebones HTML skeleton
- [x] create minimal CSS to organize the skeleton
- [x] pseudocode logic for each class, main

Personal Deadline: Friday, November 6, 10pm
- [x] create basic classes: ```player``` and ```game```
- [x] setup win condition, keep track of turns, validate moves
- [x] and be able to play the game without the DOM

Personal Deadline: Saturday, November 7, 10pm
-  [x] hook up the DOM with user interactions
-  [x] allow the game to be played on the page

Personal Deadline: Sunday, November 8, 10pm
-  [x] figure out localStorage for winCount and miniDisplays
-  [x] figure out timeout board reset

Personal Deadline: Monday, November 9, 10pm
-  [x] build out CSS to make it gorgeous and polished!
-  [x] refactor
-  [x] check [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) accessibility

Personal Deadline: Tuesday, November 10, 9pm
-  [x] finish refactoring and clean up code
-  [x] complete README with gifs and explanations
- project due!
