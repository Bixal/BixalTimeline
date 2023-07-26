# Bixal Timeline
This timeline application visually shows the history of Bixal using Javascript. It organizes events from Bixal's history into major and minor events while implementing an interactive experience for the user. 

## Timeline Technologies
**React** is used as the primary library for the Timeline project due to its component based structure. The whole timeline is rendered by just a few componetns within the app!
**Material UI** is a React component library that is used for the majority of the styling for this project. Some additional CSS was implemented on top of Material UI's styling to Bixalize the app.
**Baserow** is an open source database tool that is used to store all Bixal event data. The React app then uses an axios call to pull in data from Baserow and manipulate it to display upon the page.

## Project Challenges
The toughest challenge that was faced during production was overriding some of Material UI's styling to give the app more of a Bixal feel! It was important that the timeline encaptured the feel of the company so it was necessary to change some of the predetermined styling to make it our own, which took up the most amount of time and brain power.

## Installation
1. ```npm i``` to install dependencies
2. ```npm run dev``` to start project!

