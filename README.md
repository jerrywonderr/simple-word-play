# Simple Duplicate Character Remover

In my pursuit to join one of Github's partners in the Github octernship program, I wrote this duplicate character remover application using React, which was one of the requirements to join HouswareHQ for the octernship program. I wasn't selected but yeah, I wrote this anyway. 

While on this project, I further strengthened my knowledge of React and its principles. I learnt more about state management and how to make a React app more efficient by reducing the number of re-renders. For me, the most challenging part of this project, at the time I wrote it, was making sure each unique character had a unique colour and making sure every other duplicate character had the same colour. I later got it after a series of logical thinking. If you have the time, do play with it [here](https://jerrywonderr.github.io/simple-word-play/).

Overall, it was an amazing experience for me and I learned a lot.

## How it works
There are two screens. The first one contains an input field that receives text input from the user. This field is validated to make sure it is not empty before navigating the user to the second screen.

On the other screen, we iterate over each character in the input provided by the user and render them as cards with unique colours but all duplicate characters must have the same colour. Each card contains a delete icon at the top. Clicking the delete icon deletes all duplicate instances of the character contained in that card, except the one clicked.

The user remains on the second screen until all duplicate characters are removed. When all duplicates are removed, we render a success header and a back button. We also show the initial string and the final string.

That's it. That's a summary of the requirements of this app.

## Credits
I probably wouldn't have thought of this if I hadn't applied for the HousewareHQ octernship program through Github, so, I give credit  to HousewareHQ and Github for the opportunity.
