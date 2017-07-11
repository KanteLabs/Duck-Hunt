*** Amidou Kante / July 10th ***

# DuckHunt or SideScrollGame Proposal
 
## What is DuckHunt / or SideScrollGame?

DuckHunt game would be a game, in which the player has to kill as much duck as possible without either missing or going against a timer.

For a side-scroll game it would be something similar to jetpack joyride in which a player has to avoid obstacles, collect coins, and power ups.

## Wireframe

(Your wireframes go here. Preferably two or more)

## Initial thoughts on game structure

(Write out what challenges you expect to encounter, or ideas you want to come up with)
- Static background with a usage of sprites/gif to animate the different elements
- Scoring system could be based on lives, timer, or amount of misses
- Being able to make different sprites move across the screen at the same time or at random
- Gun or shooting mechanism that would remove a element from the screen if a the user clicks on it
- Change the cursor into possibly a image that is like a cross-hair
#### -
- Player could interact with power ups, coins, and obstacles
- Should have a collusion system, in which obstacles vary by height
- Player should be static on x-axis but move up and down on a y-axis
- Have different items move towards the same position or area of the player 
- A scoring system would be necessary as well
- Allowing the background and obstacles to run in a loop or cycle 

## Phases of Completion

- Create basic dom layout
- Able to make targets fly across the screen at random heights and time intervals
- Able to click on a target and update a score
- Able to track the mouse for optional game effects such as a tracking system that makes the targets avoid the mouse
### -
- Created the background with obstacles in place.
- Tally a score based on a timer or for how long a player traveled
- Player is able to move up and down but not side to side
- Player is able to interact with positive and negative obstacles

## Links and Resources

(Anything you've looked up so far or are thinking about using.)

I was thinking of using this game logic as a guide: https://github.com/buddharage/sidescroll-game/blob/master/script.js for the side scrolling game. But I rather create logic from scratch. For the side scrolling game, I may need to use canvas for the repeating background and random obstacles. 

For the duck hunt I was looking at this game as guide as well, but once again I want to work on creating my logic from scratch.
https://github.com/MattSurabian/DuckHunt-JS